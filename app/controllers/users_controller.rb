class UsersController < ApplicationController
    
    def show
        if current_user
            render json: current_user
        else
            render json: {error: "no active seesion"}, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: {error: "invalid inputs"}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :password, :email_address, :password_confirmation, :organisation_id)
    end

end
