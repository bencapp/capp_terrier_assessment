class CalendarController < ApplicationController
  def home
    @locations = Location.all
    @technicians = Technician.all
    @work_orders = WorkOrder.all
  end
end
