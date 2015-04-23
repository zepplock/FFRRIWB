module V1
  class StoriesController < ApplicationController
    skip_before_action :authenticate_user_from_token!
    
    def index
      @stories = Story.includes(:user).order(created_at: :desc).all
      render json: @stories, each_serializer: StoriesSerializer
    end

    def show
      @story = Story.find(params[:id])
      render json: @story, serializer: StorySerializer
    end

    private

    def story_params
      params.permit(:title, :body).merge(user: current_user)
    end

  end
end

