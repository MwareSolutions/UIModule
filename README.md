# MwareIPTVModule
MWare Solutions IPTV User Interface Module

## Intro
A collection of sample code and documentation to create modules for MWare IPTV user interface.

## Dependencies
* none

## Usage
Every module will be executed in the UI scope hence no need to import any libraries or plugins. jQuery is available during runtime.

Creating a new module is very easy

    var roomService = new MWareModule({
        name: 'Room service',
        content: 'index.html',
        player: false,
        events: {
            onLoad: function(){},
            onUnload: function(){}
        }
    });

### Module methods
Create a user-navigable zone

    module.createZone({
        rows: [[
	    {
	    	html: 'Apple',
		data: {
		    'data-id': '123'
		},
		style: {
		    width: '100px'
		},
		cls: 'some-class'
	    },
	    {
	    	html: 'Banana',
		data: {
		    'data-id': '124'
		},
		style: {
		    width: '100px'
		},
		cls: 'some-class'
	    }
	]]
	selector: '.rs-fruits',
	width: '200px',
	height: '200px',
	type: 'vertical',
	selection: 'background'
    })

Create a video player

    module.createPlayer({
	url: '//s3.amazonaws.com/x265.org/video/BigBuckBunny_2000h264.mp4',
	events: {
	    onReady: function(){},
	    onPlay: function(){},
	    onError: function(){},
	    onTime: function(){},
	    onComplete: function(){}
	}
    })

Attach an event listener to a zone or directly on a zone item

    module.addEventListener(selector, type, callback);

Open another module

    module.open(name)

### Module properties

    module.user
    module.player    

#### player methods
    module.player.play()
    module.player.stop()
    module.player.rewind()    
    module.player.forward()
    module.player.jumpTo(seconds)
    module.player.getProgress()
    
    
    
