 <!-- sidebar menu -->
 <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
  <div class="menu_section">
    <h3>General</h3>
    <ul class="nav side-menu">
       
     <li>
        <a href="/admin"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
    </li>
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Users<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.users.index')}}">All Users</a>
            </li>
            <li>
                <a href="{{route('admin.users.create')}}">Create User</a>
            </li>

        </ul>
        <!-- /.child_menu -->
    </li>
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i> Posts<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.posts.index')}}">All Posts</a>
            </li>

            <li>
                <a href="{{route('admin.posts.create')}}">Create Post</a>
            </li>

            <li>
                <a href="{{route('admin.comments.index')}}">All Comments</a>
            </li>

        </ul>
        <!-- /.child_menu -->
    </li>
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Categories<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.categories.index')}}">All Categories</a>
            </li>
        </ul>
        <!-- /.child_menu -->
    </li>

    <!--Departement -->
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Departments<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.departments.index')}}">All Departments</a>
            </li>
        </ul>
        <!-- /.child_menu -->
    </li>


    <!--Status-->
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Status<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.status.index')}}">All Status</a>
            </li>
        </ul>
        <!-- /.child_menu -->
    </li>

    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Media<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.media.index')}}">All Media</a>
            </li>

            <li>
                <a href="{{route('admin.media.create')}}">Upload Media</a>
            </li>

        </ul>
        <!-- /.child_menu -->
    </li> 
</div>
</div>
            <!-- /sidebar menu -->