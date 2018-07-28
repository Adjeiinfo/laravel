<?php

namespace App\Http\Controllers;

use App\Status;
use Illuminate\Http\Request;

class AdminStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $status = Status::all();
        //return $status;
        return view('admin.status.index',compact('status'));
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
        Status::create($request->all());


        return redirect('/admin/status');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\status  $status
     * @return \Illuminate\Http\Response
     */
    public function show( $status)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\status  $status
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        //

        $status = Status::findOrFail($id);


        return view('admin.status.edit', compact('status'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\status  $status
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        $status = Status::findOrFail($id);

        $status->update($request->all());

        return redirect('/admin/status');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\status  $status
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //
        Status::findOrFail($id)->delete();


        return redirect('/admin/status');
    }
}
