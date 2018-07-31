<?php

namespace App\Http\Controllers;

use App\statut;
use Illuminate\Http\Request;

class StatutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
         $statut = Statut::all();
         return view('admin.statut.index',compact('statut'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
         Statut::create($request->all());


        return redirect('/admin/statut');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\statut  $statut
     * @return \Illuminate\Http\Response
     */
    public function show(statut $statut)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\statut  $statut
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $statut = Statut::findOrFail($id);


        return view('admin.statut.edit', compact('statut'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\statut  $statut
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
          //
        $statut = Statut::findOrFail($id);

        $statut->update($request->all());

        return redirect('/admin/statut');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\statut  $statut
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
         Statut::findOrFail($id)->delete();


        return redirect('/admin/statut');
    }
}
