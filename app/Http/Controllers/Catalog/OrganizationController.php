<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use App\Models\Catalog\Organization;
use Illuminate\Http\Request;
use App\Http\Resources\Catalog\OrganizationResource;
use App\Http\Requests\Catalog\OrganizationRequest;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::applySortAndFilter(request('sort'), request('filter'))->paginate(request('perPage'));
        return OrganizationResource::collection($organizations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrganizationRequest $request)
    {
        $organization = Organization::create($request->validated());
        return response()->json([
            OrganizationResource::make($organization)
        ], status: 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $organization = Organization::findOrFail($id);
        return response()->json([
            'data' =>  OrganizationResource::make($organization)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OrganizationRequest $request, Organization $organization)
    {
        Organization::where('id', $organization->id)->update($request->validated());

        $organizationUpdated = Organization::findOrFail($organization->id);
        return response()->json([
            OrganizationResource::make($organizationUpdated)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function export()
    {
        $organizations = Organization::applySortAndFilter(request('sort'), request('filter'))->get();
        return response()->json(
            ['data' => $organizations]
        );
    }
}
