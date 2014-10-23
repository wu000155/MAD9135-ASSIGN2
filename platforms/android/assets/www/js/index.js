/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        //console.log("Device ready");        
// jquery not working

        //var clickMe = document.querySelector(".clickme");


  
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
         
       $("#downloadPhoneMusic").each( function() {
            alert("yehaa");
            console.log("Inside alert function");
            });

        $('#home').addClass(".show");
        $('#two').addClass(".hide");
        
        //console.log('Received Event: ' + id);
        
        app.downloadMusic();
    },

   

    downloadMusic: function(){

        var request = new XMLHttpRequest();
        request.open("GET", "http://feeds.feedburner.com/ThrillingAdventureHour");
        console.log(request);
            
        request.onreadystatechange = function() {
                if (request.readyState == 4) {
                    if (request.status == 200 || request.status == 0) {
                        var music = request.responseXML;
                       
                        console.log(music);

                        var event = document.createEvent('Event');
                        event.initEvent('contactLocationReady', true, true);
                        document.dispatchEvent(event);
                        
                    }
                }
            }
        request.send();
    },// end of getmusic




    gotMusic: function(){
        return this.success;   
        transferDownloaded();
    },

     errorCallback: function(error) {
      alert(error.code);
    },

    

    transferDownloaded: function(){

/*
        var uri = encodeURI("");
           
        fileTransfer.download(uri, fileURL, function(entry) 
        {
                console.log("download complete: " + entry.toURL());
        }
        
        function(error) {
                    console.log("download error code" + error.code);
        }
            false,
            { 
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }

            }
        */

       /* var transfer = new FileTransfer();
        transfer.download(source, target, successCallback, errorCallback);*/


     /* $("#clickme").on('click' function(){
       // remove show and add hide to page 1
        $('#home').removeClass(.show);
        $('#home').addClass(.hide);
        // remove hide and add show to page 2
         $('#two').removeClass(.hide);
        $('#two').addClass(.show);*/
        

      },

}

app.initialize();


