<?php

namespace App\Http\Requests\Catalog;

use Illuminate\Foundation\Http\FormRequest;

class OrganizationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }


    protected function prepareForValidation()
    {
        if (request()->routeIs('catalog.organizations.store')) {
            $this->merge(array_replace(
                $this->all(),
                [
                    'name' => $this->input('attributes.name'),
                    'businessName' => $this->input('attributes.businessName'),
                    'address' => $this->input('attributes.address'),
                    'city' => $this->input('attributes.city'),
                    'state' => $this->input('attributes.state'),
                    'postalCode' => $this->input('attributes.postalCode'),
                    'createdBy' => 'Admin',
                    'updatedBy' => 'Admin'
                ]
            ));
        } elseif (request()->routeIs('catalog.organizations.update')) {
            $this->merge(array_replace(
                $this->all(),
                [
                    'name' => $this->input('attributes.name'),
                    'businessName' => $this->input('attributes.businessName'),
                    'address' => $this->input('attributes.address'),
                    'city' => $this->input('attributes.city'),
                    'state' => $this->input('attributes.state'),
                    'postalCode' => $this->input('attributes.postalCode'),
                    'updatedBy' => 'Admin'
                ]
            ));
        }
    }
}
