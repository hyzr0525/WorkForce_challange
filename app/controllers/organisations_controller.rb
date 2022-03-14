class OrganisationsController < ApplicationController
    
    def index
        organisations = Organisation.all
        render json: organisations
    end

    def show
        organisation = Organisation.find_by(id: params[:id]).organisation_shifts
        if organisation
            render json: organisation
        else 
            render json: {error: "Organisation not found"}, status: :not_found
        end
    end

    def create
        new_organisation = Organisation.new(organisation_params)
        if new_organisation.save
            render json: new_organisation
        else 
            render json: {error: "invalid name or hourly rate"}, status: :unprocessable_entity
        end
    end

    def update
        organisation = Organisation.find_by(id: params[:id])
        if organisation
            organisation.update(organisation_params)
            render json: organisation
        else
            render json: {error: "invalid name or hourly rate"}, status: :unprocessable_entity
        end
    end

    def destroy
        organisation = Organisation.find_by(id: params[:id])
        if organisation
            organisation.destroy
            organisations = Organisation.all
            render json: organisations
        else 
            render json: {error: "organisation not found"}, status: :not_found
        end
    end

    private

    def organisation_params
        params.permit(:name, :hourly_rate, :id)
    end
end
