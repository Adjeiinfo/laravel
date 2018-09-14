<!DOCTYPE html>
<html lang="en">
@include('includes.ha_header')
<body class="nav-md">
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="url('/')/admin" class="site_title"><i class="fa fa-paw"></i> <span>HaiGiSTicket!</span></a>
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
      <!-- page content -->
      <div class="right_col" role="main">
        <!-- top tiles -->
        <div class="row tile_count">
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span class="count_top"><i class="glyphicon glyphicon-phone-alt"></i> Total Reclamations</span>
            <div class="count">{{$postsCount}}</div>
            <span class="count_bottom"><i class="green">4% </i> Mois Precedent</span>
          </div>

            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="glyphicon glyphicon-check"></i> Total Resolu</span>
              <div class="count green">{{$solvedTicket}}</div>
              <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> Mois Precedent</span>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="glyphicon glyphicon-hourglass"></i> Pourcentage Resolu</span>
              <div class="count">{{number_format(0.1,1)}}%</div>
              <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> Mois Precedent</span>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="glyphicon glyphicon-transfer"></i> Traitement en coours</span>
              <div class="count">{{$inProgressTicket}}</div>
              <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> Mois Precedent</span>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="glyphicon glyphicon-trash"></i> Total Suspendu</span>
              <div class="count">{{$suspendedTicket}}</div>
              <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> Mois Precedent</span>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-user"></i> Total Plaignants</span>
              <div class="count">{{$usersCount}}</div>
              <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> Mois Precedent</span>
            </div>
          </div>
          <!-- /top tiles -->
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="dashboard_graph">

                <div class="row x_title">
                  <div class="col-md-6">
                    <h3>Reclamations: TRAITE versus NON TRAITE  <small>Graph title sub-title</small></h3>
                  </div>
                  <div class="col-md-6">
                    <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
                      <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                      <span>December 30, 2014 - January 28, 2015</span> <b class="caret"></b>
                    </div>
                  </div>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-12">
                 <canvas id="lineChart"></canvas>
               </div>
               <div class="col-md-3 col-sm-3 col-xs-12 bg-white">
                <div class="x_title">
                  <h2>Progression des Reclamations</h2>
                  <div class="clearfix"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="x_panel tile ">
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                    <!-- Progression par categories: -->
                    <div class="x_content">
                      <h4>Progression Par categorie:</h4>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <canvas id="yourbarChart"></canvas>
                     </div>
                   </div>
                 </div>

               </div>
             </div>
             <br />
             <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel tile fixed_height_320">
                  <div class="x_title">
                    <h2>TOP 5 Des Agences</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <!-- for loop for the agences -->
                  <div class="x_content">
                    <h4>Agence de:</h4>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                     <canvas id="topAgencebarChart"></canvas>
                   </div>
                   <!-- end for loop -->
                 </div>
               </div>
             </div>
             <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320">
                <div class="x_title">
                  <h2>LAG 5 Des Agences</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <h4>Les Lag 5 Des Agences</h4>
                  <!-- for loop to get all element in the graph-->
                <!--  @foreach($lag5AgenceCollection as $lag5Agence)
                  <div class="widget_summary">
                    <div class="w_left w_25">
                      <span>{{$lag5Agence->name}}</span>
                    </div>
                    <div class="w_center w_55">
                      <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 66%;">
                          <span class="sr-only">{{$lag5Agence->ratio}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="w_right w_20">
                      <span>{{$lag5Agence->count}}</span>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  @endforeach -->
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <canvas id="lagAgencebarChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320 overflow_hidden">
                <div class="x_title">
                  <h2>Resolution par Categorie</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                 <!--<h4>Les Lag 5 Des Agences 2</h4>-->
                 <table class="" style="width:100%">
                  <tr>
                    <th style="width:37%;">
                      <p>Distribution par Categorie</p>
                    </th>
                    <th>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <p class="">Categorie</p>
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <p class="">Progres</p>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <canvas id="categoryDoughnut"></canvas>
                      </div>
                    </td>
                    <td>
                      <table class="tile_info">
                       <!-- for loop to loop throug the data-->
                       @foreach($topclaimcollection as $categoryPerform)
                       <tr>
                        <td>
                          <p><i class="fa fa-square blue"></i>{{$categoryPerform->name}} </p>
                        </td>
                        <td>{{$categoryPerform->count}}</td>
                      </tr>
                      @endforeach
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="ccol-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Recentes Reclamations<small>Reclamations</small></h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Settings 1</a>
                      </li>
                      <li><a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="close-link"><i class="fa fa-close"></i></a>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="x_content">
                <p class="text-muted font-13 m-b-30">
                  Les reclamations les plus recentes sont resumees dans le tableau suivant
                </p>
                <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                 <thead>
                   <tr>
                     <th>Identifiant</th>
                     <th>Objet</th>

                     <th>Status</th>
                     <th>Nom Client</th>
                     <th>Agence</th>
                     <th>Assigné A</th>

                     <th>Date Transaction</th>
                     <th>Date Soumission</th>
                     <th style="width: 20%">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                  @if($allpost)
                  @foreach($allpost as $post)
                  <tr>
                    <td>{{$post->ns_resultid}}</td>
                    <td><a href="{{route('admin.posts.edit', $post->id)}}">{{$post->department? $post->department->name . " -  ". $post->ns_event_observe : 'Objet non Defini'}}</a></td>
                    <td>{{$post->status ? $post->status->name : 'Status Inconnu'}}</td>
                    <td>{{$post->ns_nom_prenom ? $post->ns_nom_prenom : 'Sans Nom'}}</td>
                   <td>{{$post->agence ? $post->agence->name : 'Agence Inconnue'}}</td>
                    
                    <td>{{$post->user? $post->user->name : 'Pas Assigne'}}</td>
                    <td>{{$post->created_at->diffForhumans()}}</td>
                    <td>{{$post->updated_at->diffForhumans()}}</td>
                    <td>
                      <div class="col-xs-4 text-left">
                        <a href="{{route('home.post', $post->slug)}}"class = "btn btn-primary btn-xs"><i class="fa fa-eye"></i>  </a>
                      </div>
                       @can('reclam-edit')
                      <div class="col-xs-4 text-center">
                        <a href="{{route('admin.posts.edit', $post->id)}}" class="btn btn-warning btn-xs"><i class="fa fa-pencil"></i> </a>
                      </div>
                       @endcan
                      @can('reclam-delete')
                      <div class="col-xs-4 text-right">
                        <a href="{{route('admin.posts.edit', $post->id)}}" class="btn btn-danger btn-xs "><i class="fa fa-trash fa-danger"></i> </a>
                      </div>
                      @endcan
                    </td>
                  </tr>
                  @endforeach 
                  @endif
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /page content -->
<!-- footer content -->
@include('includes.ha_footer')
<!-- /footer content -->
</div>
</div>
<!--Includes scripts -->
@include('includes.ha_script')

<!-- my script here -->
<!-- Chart.js -->
<script>
  Chart.defaults.global.legend = {
    enabled: false
  };
      // Line chart
      var ctx = document.getElementById("lineChart");
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(38, 185, 154, 0.31)",
            borderColor: "rgba(38, 185, 154, 0.7)",
            pointBorderColor: "rgba(38, 185, 154, 0.7)",
            pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointBorderWidth: 1,
            data: [31, 74, 6, 39, 20, 85, 7]
          }, {
            label: "My Second dataset",
            backgroundColor: "rgba(3, 88, 106, 0.3)",
            borderColor: "rgba(3, 88, 106, 0.70)",
            pointBorderColor: "rgba(3, 88, 106, 0.70)",
            pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(151,187,205,1)",
            pointBorderWidth: 1,
            data: [82, 23, 66, 9, 99, 4, 2]
          }]
        },
      });

      // Bar chart
      var ctx = document.getElementById("yourbarChart");
      var Category = new Array();
      var Ratio = new Array();
      @forelse($solvedByCategoryCollection as $analysis) 
      Category.push("{{$analysis->name}}");
      Ratio.push("{{$analysis->ratio}}");
      @empty
      @endforelse
      var yourbarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels:Category,
          datasets: [{
            label: '# Resolution',
            backgroundColor: "#26B99A",
            data: Ratio
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });

      //Top agence bar chart 
      var ctx = document.getElementById("topAgencebarChart");
      var Category = new Array();
      var Ratio = new Array();
      @forelse($top5AgenceCollection as $analysis) 
      Category.push("{{$analysis->name}}");
      Ratio.push("{{$analysis->ratio}}");
      @empty
      @endforelse
      var yourbarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels:Category,
          datasets: [{
            label: '# Resolution',
            backgroundColor: "#26B99A",
            data: Ratio
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });

      //lagagence bar chart 
      var ctx = document.getElementById("lagAgencebarChart");
      var Category = new Array();
      var Ratio = new Array();
      @forelse($lag5AgenceCollection as $analysis) 
      Category.push("{{$analysis->name}}");
      Ratio.push("{{$analysis->ratio}}");
      @empty
      @endforelse
      var yourbarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels:Category,
          datasets: [{
            label: '# Resolution',
            backgroundColor: "#26B99A",
            data: Ratio
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });

      // Doughnut chart
      var ctx = document.getElementById("categoryDoughnut");
      var Category = new Array();
      var Ratio = new Array();
      var coloR = [];
      var dynamicColors = function() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
      };

      @forelse($topclaimcollection as $analysis) 
      Category.push("{{$analysis->name}}");
      Ratio.push("{{$analysis->count}}");
      coloR.push(dynamicColors());
      @empty
      @endforelse
      var data = {
        datasets: [{
          data:Ratio,
          backgroundColor: coloR,
        }],
        labels: Category
      };

      var canvasDoughnut = new Chart(ctx, {
        type: 'doughnut',
        tooltipFillColor: "rgba(51, 51, 51, 0.55)",
        data: data
      });

      // Radar chart
      var ctx = document.getElementById("canvasRadar");
      var data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: "rgba(3, 88, 106, 0.2)",
          borderColor: "rgba(3, 88, 106, 0.80)",
          pointBorderColor: "rgba(3, 88, 106, 0.80)",
          pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        }, {
          label: "My Second dataset",
          backgroundColor: "rgba(38, 185, 154, 0.2)",
          borderColor: "rgba(38, 185, 154, 0.85)",
          pointColor: "rgba(38, 185, 154, 0.85)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      };

      var canvasRadar = new Chart(ctx, {
        type: 'radar',
        data: data,
      });

      // Pie chart
      var ctx = document.getElementById("pieChart");
      var data = {

        datasets: [{
          data: [120, 50, 140, 180, 100],
          backgroundColor: [
          "#455C73",
          "#9B59B6",
          "#BDC3C7",
          "#26B99A",
          "#3498DB"
          ],


          label: 'My dataset' // for legend
        }],

        labels: [
        "Dark Gray",
        "Purple",
        "Gray",
        "Green",
        "Blue"
        ]


      };

      var pieChart = new Chart(ctx, {
        data: data,
        type: 'pie',
        otpions: {
          legend: false
        }
      });

      // PolarArea chart
      var ctx = document.getElementById("polarArea");
      var data = {
        datasets: [{
          data: [120, 50, 140, 180, 100],
          backgroundColor: [
          "#455C73",
          "#9B59B6",
          "#BDC3C7",
          "#26B99A",
          "#3498DB"
          ],
          label: 'My dataset' // for legend
        }],
        labels: [
        "Dark Gray",
        "Purple",
        "Gray",
        "Green",
        "Blue"
        ]
      };

      var polarArea = new Chart(ctx, {
        data: data,
        type: 'polarArea',
        options: {
          scale: {
            ticks: {
              beginAtZero: true
            }
          }
        }
      });
    </script>
    <!-- end of my script-->
  </div>
</body>
</html>
