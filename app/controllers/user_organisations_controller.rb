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

    private

    def userOrganisation_params
        params.permit(:user_id, :organisation_id)
    end

end
