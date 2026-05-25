module CoolRoutes
  def self.extended(router)
    router.instance_exec do
      # Cool Customized: Cancel user agreement signing flow #632
      get  "user_agreement/cancel"     => "login#destroy"

      scope module: :cool do
        namespace :api do
          namespace :v1 do
            resources :courses, only: [] do
              scope module: :courses do
                resources :enrollments, only: [] do
                  member do
                    put 'set_override_score'
                  end
                end
              end
            end

            # Cool Customized API Endpoint: Accept Terms of Service #631
            scope module: :users do
              post "users/:user_id/accept_terms" => "accept_terms#create",
                   as: :cool_user_accept_terms
            end
          end
        end
      end
    end
  end
end
