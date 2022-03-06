class ShiftsController < ApplicationController
    def index
        user_shifts = current_user.shifts
        render json: user_shifts
    end

    def show
        shift = current_user.shifts.find_by(id: params[:id])
        if shift
            render json: shift
        else 
            render json: {error: "Shift not found"}, status: :not_found
        end
    end

    def create
        new_shift = current_user.shifts.new(shifts_params)
        if new_shift.save
            render json: new_shift
        else 
            render json: {error: "invalid inputs"}, status: :unprocessable_entity
        end
    end

    def update
        shift = current_user.shifts.find_by(id: params[:id])
        if shift
            shift.update(shifts_params)
            render json: shift
        else
            render json: {error: "invalid inputs"}, status: :unprocessable_entity
        end
    end

    def destroy
        shift = current_user.shifts.find_by(id: params[:id])
        if shift
            shift.destroy
            shifts = current_user.shifts
            render json: shifts
        else 
            render json: {error: "shift not found"}, status: :not_found
        end
    end

    private

    def shifts_params
        params.permit(:start, :finish, :break_length, :user_id)
    end
end
