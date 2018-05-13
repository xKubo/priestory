var u = require('./utils.js');
var $ = require('jquery-browserify')

function IsPointInRect(evt, r)
{
	var res = evt.offsetX >= r.MinX && evt.offsetX < r.MaxX && evt.offsetY >= r.MinY && evt.offsetY < r.MaxY;
	//u.print("X="+evt.offsetX+" Y="+evt.offsetY+ " R=" + r.MinX + " " + r.MaxX + " " + r.MinY + " " + r.MaxY + " Res=" +res);
	return res;
}

function CategoryByCode(code)
{
	var c = null;
	for (let cat of Categories)
	{
		if (cat.Code==code)
			c = cat;
	};
	
	if (c!=null)
		return c;
	
	return DefaultCategory;
}

function ColorFromData(data)
{
	var c = CategoryByCode(data.cat);
	return c.Color;
}

function DescFromData(data)
{
	var Desc = CategoryByCode(data.cat).Desc;
	return Desc + (data.num ? (':' + data.num) : '') + (data.text ? (' - ' + data.text) : '');
}


function DrawCircle(g, pt, r, StrokeColor, FillColor)
{
	g.fillStyle = FillColor;
	g.beginPath();
	g.arc(pt.x,pt.y,r,0,2*Math.PI);
	g.fill();		

	g.lineWidth = 1;
	g.strokeStyle = StrokeColor;
	g.beginPath();
	g.arc(pt.x,pt.y,r,0,2*Math.PI);
	g.stroke();	
}

function DrawLegend(g, cats, pt)
{
	var fontsize = 15;
	g.globalAlpha = 1.0;
	g.font = fontsize+"px Arial";
	
	let i = 0;
	let linespace = fontsize + 5;
	for (i = 0; i<Categories.length; ++i)
	{
		let cat = Categories[i];
		
		if (cat.type == 'POI')
		{
			g.globalAlpha = 1;
			let p = {x:pt.x + 24, y : pt.y + linespace * (i-1) + 8};
			DrawCircle(g, p, fontsize/2, 'black', cat.Color);
		}
		else
		{
			g.globalAlpha = 0.5;
			g.fillStyle = cat.Color;
			g.fillRect(pt.x,  pt.y + linespace * (i-1), 3*fontsize, fontsize);			
		}
		g.globalAlpha = 1.0;
		g.fillStyle = 'black';
		g.fillText(cat.Desc,pt.x + 4*fontsize, pt.y + linespace * i - 8);	

	};
}

function IsPOI(obj)
{
	return obj.data.point;
}

function DrawSelectedObject(g, o)
{
	if (!o)
		return;
				
	for (let r of o.rects)
	{
		g.globalAlpha = 0.5;
		g.fillStyle = 'red';
		g.lineWidth = 5;
		g.fillRect(r.MinX, r.MinY, r.W, r.H);
	}
	
	g.globalAlpha = 1;
	if (o.img)
	{
		let h = o.img.height;
		let w = o.img.width;
		let ImgSize = 500;
		let nw, nh;
		if (w > h)
		{
			nw = ImgSize;
			nh = ImgSize * h / w;
		}
		else
		{
			nh = ImgSize;
			nw = ImgSize * w / h;
		}
		let ox = o.MaxRect[0];
		let ImageLeftCoord = ox > 800 ? 200 : 900;
		g.drawImage(o.img, 0,0, o.img.width, o.img.height, ImageLeftCoord, 100, nw, nh);
	}
}


let PointRadius = 8;

function DrawObject(g, o)
{
	if (o.point)
	{
		DrawCircle(g, o.point, PointRadius, 'black', ColorFromData(o.data));
	}
	else
		for (let r of o.rects)
		{
			g.globalAlpha = 0.5;
			g.fillStyle = ColorFromData(o.data);
			g.fillRect(r.MinX, r.MinY, r.W, r.H);		
		}
	
	if (o.data.num && !o.point)
	{
		g.font = "bold 11px Arial";
		g.fillStyle = 'black';
		g.globalAlpha = 1.0;
		
		let ex = g.measureText(o.data.num);
		g.fillText(o.data.num, o.MaxRect[0] + o.MaxRect[2]/2 - ex.width/2, o.MaxRect[1]+ o.MaxRect[3]/2 + 10/2);		
	}

}

function AddRect(rects, r, data)
{
	let rect = {MinX : r[0], MinY : r[1], MaxX : r[0] + r[2], MaxY : r[1] + r[3], Data : data, W : r[2], H : r[3]};
	rects.push(rect);
}

function CreateObjectFromData(d)
{
	let o = {data : d, rects : []};
	if (o.data.point)
	{
		let r = [o.data.point[0] - PointRadius, o.data.point[1] - PointRadius, 2*PointRadius, 2*PointRadius];
		AddRect(o.rects, r, o.data);
		o.MaxRect = r;
		o.point = {};
		o.point.x = o.data.point[0];
		o.point.y = o.data.point[1];
	}
	else if (o.data.rect)
	{
		let r = o.data.rect;
		AddRect(o.rects, r, o.data);
		o.MaxRect = r;
	}
	else if (o.data.rects)
	{
		let Area = 0;
		let mr;
		for (let r of o.data.rects)
		{
			if (r[2]*r[3] > Area)
			{
				Area = r[2]*r[3];
				mr = r;
			}
				
			AddRect(o.rects, r, o.data);
		}
		o.MaxRect = mr;
	}
				
	return o;
}

function ImageLoader()
{
	let il = {
		CreateImage : function(filename)
		{
			var i = new Image();
			i.src = filename;
			i.onload = function()
			{
				if (this.CheckAllLoaded())
					this.OnLoad();				
			}.bind(this);
			
			this.images.push(i);
			return i;
		},
		images : [],
		
		CheckAllLoaded : function()
		{
			for (let i of this.images)
			{
				if (!i.complete)
					return false;
			}
			
			return true;
		},
	};
	return il;
};

window.GetMain = function()
{
	var m = 
	{
		init : function (idCnv, idMsgDiv, d) {
			// init Main div tag
		
			this.idMsgDiv = idMsgDiv;
			this.c = $(idCnv)[0];
			this.g = this.c.getContext("2d");
			this.img = new Image();
			this.SelectedObject = null,
			this.il = ImageLoader();
			this.img = this.il.CreateImage('image.png');
			this.objects = this.ParseData(d);
			for (o of this.objects)
			{
				if (o.data.img)
					o.img = this.il.CreateImage(o.data.img);
			}
			this.Redraw  = function()
			{
				this.g.clearRect(0, 0, this.c.width, this.c.height);
				this.g.globalAlpha = 1.0;
				this.g.drawImage(this.img, 0,0);
				DrawLegend(this.g, Categories, {x:20, y:50});
				for (let o of this.objects)
					DrawObject(this.g, o);		
				DrawSelectedObject(this.g, this.SelectedObject);

			},

			this.il.OnLoad = function() {
				this.c.width = this.img.width;
				this.c.height = this.img.height;				
				this.Redraw();
			}.bind(this);
			
			this.c.onmousemove = function(evt)
			{
				let found = false;
				cycle : {
					for (let obj of this.objects)
					{
						for (let r of obj.rects)
						{
							if (IsPointInRect(evt, r))
							{		
								found = true;
								this.OnObject(obj, evt);
								break cycle;
							}												
						}
					}
					
				}
				if (!found)
					this.OnObject(null, evt);
				
				this.Redraw();
				
			}.bind(this);
			
			this.OnObject = function(o, evt)
			{
				let Coord = "["+evt.offsetX + ", " + evt.offsetY + "]";
				if (!o)
				{
					this.SelectedObject = null;
					$(this.idMsgDiv).text(Coord + " : Bez popisu");
					return;
				}
				
				this.SelectedObject = o;
				$(this.idMsgDiv).text(Coord + " : " + DescFromData(o.data));
				
			};
		},	
		onmdown : function (evt) {u.print('Down'); },
		ParseData : function(data)
		{
			let objects = [];
			for (let d of data)
			{
				let o = CreateObjectFromData(d);
				// we put the POI objects as the first
				if (!IsPOI(o))
					objects.push(o);
				else
					objects.unshift(o);
			}
			return objects;
		},
	};
	
	return m;
}
