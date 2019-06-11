require 'test_helper'

class LandingPageControllerTest < ActionDispatch::IntegrationTest

  test 'should get the homepage' do
     get '/'
     assert_response :success
   end
end
