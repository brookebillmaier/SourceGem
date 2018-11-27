class ClientsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Client.all
    end

    def show
        render json: Client.find(params["id"])
    end

    def create
        render json: Client.create(params["client"])
    end

    def delete
        render json: Client.delete(params["id"])
    end

    def update
        render json: Client.update(params["id"], params["client"])
    end
end
