 <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src= "{{Auth::user()->photo->file}}"alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Bienvenue,</span>
                <h2>{{Auth::user()->name}}</h2>
              </div>
            </div>