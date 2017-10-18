/* 
 * MWare IPTV Example Module JS
 */

/*
 * Set up a new module
 */
var poi = new MWareModule({
	
	/*
	 * @option name module name and main menu label
	 */
	name: 'Local Info',
	
	/*
	 * @option content path to module html content
	 */
	content: 'PointsOfInterest/index.html',
	
	/*
	 * @option events
	 */
	events: {
		
		/*
		 * @function onLoad executed on module load
		 */
		onLoad: moduleIsReady
	}
});

function moduleIsReady(){
	
	/*
	 * request data to use for points of interest
	 */
	$.ajax({
		url: '//slashwebdesign.studio/mware.ui/module/PointsOfInterest/data.json',
		dataType: 'json',
		success: function(data){
			
			console.log(data);

			/*
			 * build a matrix of rows and columns with items to pass into the zone
			 */
			var 
				rows = [],
				counter = 0,
				rowIndex = 0;
			
			for (var i = 0; i < data.length; i++)
			{
				if (!rows[rowIndex]) rows[rowIndex] = [];
				
				rows[rowIndex].push({
					html: '<img src="' + data[i].image + '" />',
					data: {
						'data-name': data[i].name,
						'data-description': data[i].description,
						'data-address': data[i].address,
					},
					style: {
						width: '150px'
					},
					cls: 'place'
				});
				
				counter++;
				
				if (counter === 4)
				{
					counter = 0;
					rowIndex++;
				}
			}

			/*
			 * turn the container element into a user navigable zone
			 */
			poi.createZone({
				rows: rows,
				selector: '.poi',
				width: '640px',
				height: '310px',
				type: 'grid',
				selection: 'border'
			});
			
			/*
			 * assign a callback function to run every time an element
			 * from the zone is selected
			 */
			poi.addEventListener('.poi', 'select', function(item){
				
				$('.poi-detail h3').html(item.name);
				$('.poi-detail p').html(item.address);
				$('.poi-detail div').html(item.description);
				
			});

		}
	});

};