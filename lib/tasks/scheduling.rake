require 'csv'

# Rake task for importing CSV files to database
task :import => :environment do
    CSV.foreach("app/assets/scheduling-data/locations.csv", headers: true) do |row|
        h = row.to_hash
        location = Location.new(id: h["id"], name: h["name"], city: h["city"])
        location.save!()
    end
    CSV.foreach("app/assets/scheduling-data/technicians.csv", headers: true) do |row|
        h = row.to_hash
        technician = Technician.new(id: h["id"], name: h["name"])
        technician.save!()
    end
    CSV.foreach("app/assets/scheduling-data/work_orders.csv", headers: true) do |row|
        h = row.to_hash
        workOrder = WorkOrder.new(id: h["id"], technician_id: h["technician_id"],
            location_id: h["location_id"], time: h["time"], duration: h["duration"], price: h["price"])
        workOrder.save!()
    end
end


