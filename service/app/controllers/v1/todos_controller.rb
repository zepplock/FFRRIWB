module V1
  class TodosController < ApplicationController

    def index
      @todos = current_user.todos.order(created_at: :desc).all
      render json: @todos, each_serializer: TodoSerializer
    end

    def show
      @todo = Todo.find(params[:id])
      render json: @todo, serializer: TodoSerializer
    end

    def create
      @todo = Todo.new(todo_params)

      if @todo.save
        render json: @todo, serializer: TodoSerializer
      else
        render json: { error: t('todo_create_error') }, status: :unprocessable_entity
      end
    end

    def destroy
      @todo = Todo.find(params[:id])
      @todo.destroy
      render json: @todo, serializer: TodoSerializer
    end

    private

    def todo_params
      params.permit(:body).merge(user: current_user)
    end

  end
end

