var DefaultCategory = {Color:'#FF0000', Desc: 'Priestor'};
var Categories = 
[
	{Code: 'p', Color:'#0000CF', Desc:'Pivnica'},
	{Code: 's', Color:'#00FF00', Desc:'Sušiareň'},
	{Code: 'g', Color:'#FFFF00', Desc:'Garáž'},
	{Code: 'k', Color:'#C0C0C0', Desc:'Kočikáreň'},
	{Code: 'sp', Color:'#CCCC55', Desc:'Spoločný priestor'},
	{Code: 'm', Color:'#FF8888', Desc:'Miestnosť bez označenia'},

	{Code: 'sk', Color:'cyan', Desc:'Sklad'},	

	{Code: 'e', Color:'red', Desc:'Elektrická skriňa', type:'POI'},
	{Code: 'st', Color:'green', Desc:'Stupačka', type:'POI'},
];

var data = 
[
	// Pivnice - Vchod c.10
	{	rect : [26, 312, 36, 48], 
		cat:'p',
		num:'44',
	},
	{	rect : [65, 314, 31, 43], 
		cat: 'p',
		num	: '32',
	},
	{	rect : [100, 312, 38, 46], 
		cat:'p', 
		num : '42',
	},	
	{	rect : [146, 311, 31, 46], 
		cat:'p',
		num : '48',
	},	
	
	{	rect : [27, 381, 41, 39], 
		cat:'p',
		num: '47',
	},
	{	rect : [69, 380, 48, 39], 
		cat: 'p',
		num	: '43',
	},
	{	rect : [70, 421, 45, 30], 
		cat:'p',
		num : '45',
	},	
	
	{	rect : [28, 423, 40, 29], 
		cat:'p', 
		num : '36',
	},	
	
	{	rect : [28, 480, 24, 39], 
		cat:'p', 
		num : '46',
	},	
	
	{	rect : [28, 523, 26, 45], 
		cat: 'p', 
		num : '41',
	},	

	// Kocikaren vchod 10
	{	rect : [77, 480, 66, 86], 
		cat:'k', 
		//num : '27',
	},	
	
	// Pivnice vchod 10
	{	rect : [179, 312, 32, 44], 
		cat: 'p', 
		num : '37',
	},	
	
	{	rect : [215, 311, 33, 44], 
		cat: 'm', 
		num : '27',
	},	

	{	rect : [250, 311, 30, 43], 
		cat: 'p', 
		num : '29',
	},	
	{	rect : [283, 311, 37, 43], 
		cat: 'p', 
		num : '34',
	},	

	{	rect : [216, 381, 24, 65], 
		cat:'p', 
		num : '40',
	},	
	
	{	rect : [244, 381, 24, 64], 
		cat: 'p', 
		num : '35',
	},	
	
	{	rect : [271, 381, 25, 64], 
		cat: 'p', 
		num : '38',
	},	

	{	rect : [300, 380, 23, 65], 
		cat: 'p', 
		num : '39',
	},	
	
	// Garaze vchod 10
	{ 
		rect : [218, 449, 51, 116], 
		cat:'g', 
		num: '10 A',
		color:'#00FF00'
	},
	{ 
		rect : [272, 449, 53, 116], 
		cat:'g', 
		num: '10 B',
		color:'#00FF00'
	},


	// Pivnica vchod 8
	{	rect : [333, 380, 23, 45], 
		cat: 'p', 
		num : '31',
	},	

	{	rect : [334, 429, 23, 41], 
		cat: 'p', 
		num : '22',
	},	


	{	rect : [381, 381, 58, 89], 
		cat: 'k', 
		//num : '15',
	},			
	
	

	  // Susiaren vchod 8
	{ 
		rects : 
		[
			[329, 218, 82, 135], 
			[411, 218, 27, 40]
		], 
		cat:'s',
		//num : 13,
		text:'Zasadačka'
	},
	
	
		// Spolocny priestor
	{	rect : [443, 217, 64, 41], 
		cat: 'sp', 
		//num : '15 N',
		text: 'Stupačka, kúrenie'
	},	

	{	rect : [633, 323, 61, 53], 
		cat: 'sp', 
		//num : '21 N',
		text: 'KOSTka',
	},	

	{	rect : [513, 217, 22, 41], 
		cat: 'p', 
		num: '33'
	},			
	
	{	rect : [538, 216, 33, 80], 
		cat: 'p', 
		num: '25'
	},	
	
		
	{	rect : [575, 216, 48, 80], 
		cat: 'sp', 
		//num: '10 N',
		text: 'Práčovňa'
	},	
	
			
	{	rect : [514, 324, 51, 26], 
		cat: 'p', 
		num: '21'
	},	
	
			
	{	rect : [569, 324, 53, 26], 
		cat: 'p', 
		num: '30'
	},	
	
				
	{	rect : [514, 355, 52, 113], 
		cat: 'g', 
		num: '8 A'
	},	
	{	rect : [569, 354, 52, 113], 
		cat: 'g', 
		num: '8 B'
	},		
	
	{	rect : [632, 266, 40, 29], 
		cat: 'p', 
		num: '23'
	},	
	
			
	{	rect : [674, 267, 40, 28], 
		cat: 'p', 
		num: '13'
	},	
	
				
	{	rect : [717, 323, 24, 53], 
		cat: 'k', 
		//num: '20 N'
	},	
	
	// Susiaren vchod 6
	{ 
		rects : 
		[		
			[630, 120, 84, 144], 
			[714, 120, 28, 48]
		], 
		cat:'s',
		//num : 17,
	},
	
	{	rect : [746, 122, 63, 46], 
		cat: 'sp', 
		//num: '15 N'
		text : 'Mangeľ'
	},	
	
			
	{	rect : [815, 121, 35, 47], 
		cat: 'p', 
		num: '26'
	},	
	
	{	rect : [853, 121, 35, 46], 
		cat: 'p', 
		num: '15'
	},	

	{	rect : [892, 120, 35, 48], 
		cat: 'p', 
		num: '9'
	},	
				
	{	rect : [815, 192, 27, 65], 
		cat: 'p', 
		num: '24'
	},	
	
	{	rect : [845, 192, 26, 64], 
		cat: 'p', 
		num: '4'
	},	

	{	rect : [875, 192, 26, 64], 
		cat: 'p', 
		num: '12'
	},	
	
	{	rect : [902, 193, 25, 63], 
		cat: 'm', 
		num: '?'
	},	
	
	
	{	rect : [816, 260, 54, 114], 
		cat: 'g', 
		num: '6 A'
	},	
	
	{	rect : [875, 260, 52, 112], 
		cat: 'g', 
		num: '6 B'
	},	
	
	/// Vchod c. 4
	
	{	rect : [938, 99, 42, 35], 
		cat: 'p', 
		num: '11'
	},	

	{	rect : [981, 100, 42, 34], 
		cat: 'p', 
		num: '28'
	},	
				
	{	rect : [938, 135, 41, 34], 
		cat: 'p', 
		num: '28'
	},	
	
	{	rect : [981, 135, 42, 35], 
		cat: 'p', 
		num: '20'
	},	

	{	rect : [937, 193, 26, 41], 
		cat: 'p', 
		num: '17'
	},	
	
	{	rect : [936, 237, 27, 43], 
		cat: 'p', 
		num: '18'
	},	
	
	{	rects : [[987, 197, 60, 84],  [987, 191, 34, 6] ],
		cat: 'k', 
		//num: '22'
	},	 

	{	rect : [938, 28, 35, 43], 
		cat: 'p', 
		num: '6'
	},	

	{	rect : [975, 29, 37, 43], 
		cat: 'p', 
		num: '14'
	},	
	
	{	rect : [1015, 30, 35, 42], 
		cat: 'p', 
		num: '1'
	},		
	
	{	rect : [1057, 30, 65, 43], 
		cat: 'm', 
		num: '?'
	},		

	{	rect : [1125, 31, 111, 43], 
		cat: 'sp', 
		//num: '12',
		text: 'Výmenička'
	},		
	
	
	{	rect : [1180, 147, 54, 21], 
		cat: 'p', 
		num: '19'
	},	
	
	{	rect : [1125, 147, 52, 20], 
		cat: 'p', 
		num: '10'
	},		
	
	{	rect : [1151, 77, 41, 44], 
		cat: 'p', 
		num: '8'
	},		

	{	rect : [1195, 77, 41, 46], 
		cat: 'p', 
		num: '2'
	},		
	
		
	{	rect : [1124, 171, 53, 111], 
		cat: 'g', 
		num: '4 A'
	},		

	{	rect : [1180, 171, 53, 111], 
		cat: 'g', 
		num: '4 B'
	},		
	
	
	/// Vchod c.2
	
	{	rect : [1242, 333, 23, 43], 
		cat: 'p', 
		num: '5'
	},	
	
	{	rect : [1242, 288, 23, 42], 
		cat: 'p', 
		num: '3'
	},		
	
	{	rect : [1269, 237, 42, 24], 
		cat: 'p', 
		num: '7'
	},		

	{	rect : [1314, 238, 42, 24], 
		cat: 'p', 
		num: '16'
	},	

	{	rects : [[1291, 294, 61, 82],  [1291, 289, 36, 5] ],
		cat: 'k', 
		//num: '15'
	},		
	
	{	rect : [1271, 125, 81, 107], 
		cat: 'sp', 
		//num: '11',
		text: 'Ohrievače TÚV',
	},	
	
	{	rect : [1431, 126, 110, 252], 
		cat: 'sp', 
		//num: '6',
		text: 'Kotolňa',
	},	
	
		// ...
	
	{	rect : [1361, 126, 35, 42], 
		cat: 'sp', 
		//num: '10',
		text: 'Kurič',
	},

	{	rect : [1398, 126, 27, 15], 
		cat: 'sp', 
		//num: '6',
		text: 'WC',
	},

	{	rect : [1398, 144, 29, 25], 
		cat: 'sp', 
		//num: '6',
		text: 'Sprcha',
	},	
	
// sklady vo vchodoch
	{	rect : [190, 410, 20, 40], 
		cat: 'sk', 
		num: '10',
	},	

	{	rect : [486, 313, 20, 40], 
		cat: 'sk', 
		num: '8',
	},	

	{	rect : [789, 219, 20, 40], 
		cat: 'sk', 
		num: '6',
	},	

	{	rect : [1100, 128, 20, 40], 
		cat: 'sk', 
		num: '4',
	},	

	{	rect : [1403, 225, 20, 40], 
		cat: 'sk', 
		num: '2',
	},		

	
// points of interest	

	
	{ 
		point : [135, 445],
		img : 'Fotky/E10.jpg',
		cat : 'e',
		num : 10,
	},	
	
	{ 
		point : [434, 352],
		img : 'Fotky/E8.jpg',
		cat : 'e',
		num : 8,
	},	
	
	{ 
		point : [738, 292],
		img : 'Fotky/E6.jpg',
		cat : 'e',
		num : 6,
	},	
	
	{ 
		point : [1048, 160],
		img : 'Fotky/E4.jpg',
		cat : 'e',
		num : 4,
	},	
	
	{ 
		point : [1348, 280],
		img : 'Fotky/E2.jpg',
		cat : 'e',
		num : 2,
	},	
	

	
		{ 
		point : [906, 173],
		img : 'Fotky/9.jpg',
		cat : 'st',
		num : 6,
	},

		{ 
		point : [1148, 139],
		img : 'Fotky/10.jpg',
		cat : 'st',
		num : 4,
	},		
	
	{ 
		point : [950, 168],
		img : 'Fotky/28.jpg',
		cat : 'st',
		num : 4,
	},		

	{ 
		point : [589, 316],
		img : 'Fotky/30.jpg',
		cat : 'st',
		num : 8,
	},

	{ 
		point : [302, 354],
		img : 'Fotky/34.jpg',
		cat : 'st',
		num : 10,
	},		
	
		{ 
		point : [34, 456],
		img : 'Fotky/36.jpg',
		cat : 'st',
		num : 10,
	},	
	
	{ 
		point : [119, 364],
		img : 'Fotky/42.jpg',
		cat : 'st',
		num : 10,
	},	
	
	{ 
		point : [28, 376],
		img : 'Fotky/47.jpg',
		cat : 'st',
		num : 10,
	},	
	
	{ 
		point : [286, 373],
		img : 'Fotky/38.jpg',
		cat : 'st',
		num : 10,
	},		
	
];

