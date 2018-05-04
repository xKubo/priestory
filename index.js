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
	Categories.forEach(function(cat){
		if (cat.Code==code)
			c = cat;
	});
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


function DrawLegend(g, cats, pt)
{
	var fontsize = 15;
	g.globalAlpha = 1.0;
	g.font = fontsize+"px Arial";
	
	var i = 0;
	let linespace = fontsize + 5;
	Categories.forEach(function(cat){
		let n = ++i;
		g.globalAlpha = 0.5;
		g.fillStyle = cat.Color;
		g.fillRect(pt.x,  pt.y + linespace * (n-1), 3*fontsize, fontsize);
		g.globalAlpha = 1.0;
		g.fillStyle = 'black';
		g.fillText(cat.Desc,pt.x + 4*fontsize, pt.y + linespace * n - 8);	
	});
}


function AddRect(g, rects, r, data)
{
	g.globalAlpha = 0.5;
	g.fillStyle = ColorFromData(data);
	g.fillRect(r[0], r[1], r[2], r[3]);
	var r = {MinX : r[0], MinY : r[1], MaxX : r[0] + r[2], MaxY : r[1] + r[3], Data : data};
	rects.push(r);
}

function CreateObjectFromData(d, g)
{
	var o = {data : d, rects : []};
	if (o.data.rect)
	{
		let r = o.data.rect;
		AddRect(g, o.rects, r, o.data);
		o.MaxRect = r;
	}
	else if (o.data.rects)
	{
		let r = o.data.rects;
		var Area = 0;
		var mr;
		r.forEach(function(r){
			if (r[2]*r[3] > Area)
			{
				Area = r[2]*r[3];
				mr = r;
			}
				
			AddRect(g, o.rects, r, o.data);
		}.bind(this));
		o.MaxRect = mr;
	}
	
	g.font = "10px Arial";
	g.fillStyle = 'black';
	g.globalAlpha = 1.0;
	var ex = g.measureText(o.data.num);
	g.fillText(o.data.num, o.MaxRect[0] + o.MaxRect[2]/2 - ex.width/2, o.MaxRect[1]+ o.MaxRect[3]/2 + 10/2);
		
	return o;
}

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
			this.img.onload = function() {
				this.c.width = this.img.width;
				this.c.height = this.img.height;
				this.g.drawImage(this.img, 0,0);
				DrawLegend(this.g, Categories, {x:20, y:50});
				// parse objects from data
				this.objects = this.ParseData(d);
			}.bind(this);
			this.img.src = 'image.png';
			
			this.c.onmousemove = function(evt)
			{
				//u.print("x="+evt.offsetX + " y=" + evt.offsetY);
				let found = false;
				this.objects.forEach(function(obj)
				{
					obj.rects.forEach(function(r)
					{
						if (IsPointInRect(evt, r))
						{		
							u.print("F="+r);
							found = true;
							this.OnObject(obj.data, evt);
						}												
					}.bind(this));
				}.bind(this));
				if (!found)
					this.OnObject(null, evt);
			}.bind(this);
			
			this.OnObject = function(data, evt)
			{
				var Coord = "["+evt.offsetX + ", " + evt.offsetY + "]";
				if (!data)
					$(this.idMsgDiv).text(Coord + " : Bez popisu");
				else
					$(this.idMsgDiv).text(Coord + " : " + DescFromData(data));
			};
		},	
		onmdown : function (evt) {u.print('Down'); },
		ParseData : function(data)
		{
			var objects = [];
			data.forEach(function(d){
				objects.push(CreateObjectFromData(d, this.g));
			}.bind(this));
			return objects;
		},
	};
	
	return m;
}
