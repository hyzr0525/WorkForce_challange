class UserOrganisationsController < ApplicationController

    def index
        organisations = UserOrganisation.all
        render json: organisations
    end


    def create
        userOrganisation = UserOrganisation.new(userOrganisation_params)
        if userOrganisation.save
            render json: userOrganisation
        else 
            render json: {error: "Sorry, something went wrong"}, status: :unprocessable_entity
        end
    end

    def destroy
        userOrganisation = UserOrganisation.find_by(id: params[:id])
        if userOrganisation
            userOrganisation.destroy
            userOrganisations = UserOrganisation.all
            render json: userOrganisations
        else 
            render json: {error: "User organisation not found"}, status: :not_found
        end
    end

    private

    def userOrganisation_params
        params.permit(:user_id, :organisation_id)
    end

end
