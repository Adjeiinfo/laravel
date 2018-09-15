 <!-- sidebar menu -->
 <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
  <div class="menu_section">
    <h3>General</h3>
    <ul class="nav side-menu">
       
     <li>
        <a href="{{url('/admin')}}"><i class="fa fa-dashboard fa-fw"></i> Tableau de Board</a>
    </li>
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Employés<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.users.index')}}">Liste des Employé</a>
            </li>
            <li>
                <a href="{{route('admin.users.create')}}">Creer Nouveau</a>
            </li>

        </ul>
        <!-- /.child_menu -->
    </li>
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i> Réclamations<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.posts.index')}}">Liste des Réclamations</a>
            </li>

            <li>
                <a href="{{route('admin.posts.create')}}">Nouvelle Réclamation</a>
            </li>

            <!--<li>
                <a href="{{route('admin.comments.index')}}">All Comments</a>
            </li>-->

        </ul>
        <!-- /.child_menu -->
    </li>
    <!--<li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Categories<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.categories.index')}}">All Categories</a>
            </li>
        </ul>
       
    </li>-->

    <!--Departement -->
    <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Services & Produits<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.departments.index')}}">Tous les Service & Produits</a>
            </li>
        </ul>
        <!-- /.child_menu -->
    </li>


    <!--Status-->
   <!-- <li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Status<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.status.index')}}">All Status</a>
            </li>
        </ul>
       
    </li>-->

    <!--<li>
        <a href="#"><i class="fa fa-wrench fa-fw"></i>Media<span class="fa arrow"></span></a>
        <ul class="nav child_menu">
            <li>
                <a href="{{route('admin.media.index')}}">All Media</a>
            </li>

            <li>
                <a href="{{route('admin.media.create')}}">Upload Media</a>
            </li>

        </ul>
       
    </li> -->
</div>
</div>
            <!-- /sidebar menu -->