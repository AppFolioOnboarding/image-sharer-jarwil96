require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
 def setup
   @image = Image.new(name: 'test', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcvZuJfs9XIzDk3HwMxuFlavuvOrGHCp_v7sSuiMIo6iBeKiO' )
 end

end
