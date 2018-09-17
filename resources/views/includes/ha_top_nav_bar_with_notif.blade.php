<div class="top_nav">
  <div class="nav_menu">
    <nav>
      <div class="nav toggle">
        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="">
          <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <img src="{{Auth::user()->photo->file}}" alt="">{{Auth::user()->name}}
          </a>
          <ul class="dropdown-menu dropdown-usermenu pull-right">
            <!--<li><a href="javascript:;"> Profile</a></li>
            <li>
              <a href="javascript:;">
                <span class="badge bg-red pull-right">50%</span>
                <span>Settings</span>
              </a>
            </li>-->
            <li><a href="javascript:;">Help</a></li>

            <li><a href="{{url('./logout')}}"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>

          </ul>
        </li>

        <li role="presentation" class="dropdown">
          <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-globe"></i>
            <span class="badge bg-green">{{count(auth()->user()->notifications)}}</span>
          </a>
          <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
            <li>
              <a>
                <span class="image"><img src="images/img.jpg" alt="" /></span>
                <span>
                  <span>Nouvelle reclamation test</span>
                  <span class="time">3 mins ago</span>
                </span>
                <span class="message">
                  En mode test. Sera disponible bientot...
                </span>
              </a>
            </li>
            <div class="text-center">
              <a>
                <strong>Voir toutes les notifications</strong>
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </li>
        </ul>
      </li>

      <li role="presentation" class="dropdown">
        <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-user"></i>
          <span class="badge bg-green">2</span>
        </a>
        <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
          <li>
            <a>
              <span class="image"><img src="images/img.jpg" alt="" /></span>
              <span>
                <span>Nouvelle requete test</span>
                <span class="time">5 mins ago</span>
              </span>
              <span class="message">
                En mode test. Sera disponible bientot..
              </span>
            </a>
          </li>
          <div class="text-center">
            <a>
              <strong>Voir toutes les requetes</strong>
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</nav>
</div>
</div>
