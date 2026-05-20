# frozen_string_literal: true

module Cool::Api::V1
  class Users::AcceptTermsController < ApplicationController
    before_action :require_admin_user

    # @API Cool-Customized: Accept Terms of Service
    # @argument user_id [Integer] The ID of the user accepting the terms.
    # 
    # Records user.preferences[:accepted_terms] = Time.now.utc so that
    # require_acceptance_of_terms? returns false on the user's next login.
    #
    # @returns { accepted_at: Time } The timestamp when the terms were accepted.
    #
    # @example_request
    #
    #   curl 'https://<canvas>/api/v1/users/123/accept_terms' \
    #     -X POST \
    #     -H "Authorization: Bearer <token>"
    #
    def create
      user = User.find_by!(id: params[:user_id])
      user.accept_terms
      user.save!
      render json: { accepted_at: user.preferences[:accepted_terms] }, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { error: "User not found" }, status: :not_found
    end

    private

    def require_admin_user
      unless @current_user&.account_users&.active&.exists?
        render json: { error: "Forbidden" }, status: :forbidden
      end
    end
  end
end
