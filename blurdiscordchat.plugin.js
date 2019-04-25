//META{"name":"blur","website":"https://github.com/mrpvtdagger","source":"https://github.com/mrpvtdagger"}*//

class blur {
	
	getName() { return "Blur Chat"; }
	getDescription() { return "This plugin blurs your chat box when discord is not focused (You mouse isn't on discord)."; }
	getVersion() { return "0.2.1"; }
	getAuthor() { return "Dagger"; }

	load() {}
	start() {

		let libLoadedEvent = () => {
			try{ this.onLibLoaded(); }
			catch(err) { console.error(this.getName(), "fatal error, plugin could not be started!", err); try { this.stop(); } catch(err) { console.error(this.getName() + ".stop()", err); } }
		};

		let lib = document.getElementById("NeatoBurritoLibrary");
		if(!lib) {
			lib = document.createElement("script");
			lib.id = "NeatoBurritoLibrary";
			lib.type = "text/javascript";
			lib.src = "https://rawgit.com/Metalloriff/BetterDiscordPlugins/master/Lib/NeatoBurritoLibrary.js";
			document.head.appendChild(lib);
		}
		this.forceLoadTimeout = setTimeout(libLoadedEvent, 30000);
		if(typeof window.NeatoLib !== "undefined") libLoadedEvent();
		else lib.addEventListener("load", libLoadedEvent);

	}
	onLibLoaded() { 
    	this.style = NeatoLib.injectCSS(`		
            body:not(:hover) div[class^="messagesWrapper-"]  {
            filter: blur(20px);
            transition-delay: 2s;
        }
     `);
	}
stop(){
  this.style.destroy();
 }	
}
