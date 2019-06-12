class Image < ApplicationRecord
  validates :name, :url, presence: true, uniqueness: true
  URL_FORMAT = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ix
  validates :url, format: { with: URL_FORMAT, multiline: true, message: 'Your url is not valid' }
end
