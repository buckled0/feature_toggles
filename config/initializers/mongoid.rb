module Mongoid
  module Document
    def index_name
      
    end

    def as_json(options={})
      attrs = super(options)
      attrs["id"] = attrs["_id"].to_s
      attrs
    end
  end
end
