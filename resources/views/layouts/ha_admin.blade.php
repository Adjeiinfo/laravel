<!DOCTYPE html>
<html lang="en">
@include('includes.ha_header')

<body class="nav-md">
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span> HaiGiS Ticket</span></a>
          </div>
          <div class="clearfix"></div>
          <!-- include quick side profile -->
          @include('includes.ha_quick_prof') 
          <br />
          <!-- include sidebar-->
          @include('includes.ha_side_bar')
          <!-- include footer buttons -->
          @include('includes.ha_footer_button')
        </div>
      </div>
      <!-- Include top navigation bar-->
      @include('includes.ha_top_nav_bar')
      <div class="right_col" role="main">
        @yield('content')
        <!-- page content --> 
      </div>
      <!-- /page content -->
      <!-- footer content -->
      @include('includes.ha_footer')
      <!-- /footer content -->
    </div>
  </div>
  <!--Includes scripts -->
  @include('includes.ha_script')
</body>
</html>