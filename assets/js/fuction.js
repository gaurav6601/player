   $('.spinner-wrap').on('click',function(){
      var $this = $(this),
          audio=$this.siblings('audio')[0],
          bpm=$this.siblings('audio').data('bpm'),
          pulse=(60/bpm)*1000;

      if (audio.paused === false) {
         audio.pause();
         audio.currentTime=0;
         $this.removeClass('playing');
         clearInterval(id);
      } else {
         audio.play();
         $this.addClass('playing');
         work();
         id =setInterval(function(){work()},pulse);
      }
      function work() {
         $this.addClass('pulse');
         setTimeout(function(){
            $this.removeClass('pulse')
         },pulse-300);
      }

   });
