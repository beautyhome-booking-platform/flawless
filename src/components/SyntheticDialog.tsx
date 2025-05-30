import { Dialog, Transition, TransitionChild, DialogTitle, DialogPanel } from "@headlessui/react";
import { Fragment } from "react";

interface SyntheticDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SyntheticDialog({ isOpen, onClose }: SyntheticDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

        {/* Dialog Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel  className="w-full max-w-2xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 shadow-xl transition-all">
              <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4">
                Summary Appointment
              </DialogTitle>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-red-50 p-3 rounded-2xl text-center">
                  <p className="text-xl font-bold text-red-700">120</p>
                  <p className="text-xs text-gray-600">Total Appointments</p>
                </div>
                <div className="bg-green-50 p-3 rounded-2xl text-center">
                  <p className="text-xl font-bold text-green-700">45</p>
                  <p className="text-xs text-gray-600">Customer</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-2xl text-center">
                  <p className="text-xl font-bold text-orange-700">75</p>
                  <p className="text-xs text-gray-600">Cancel</p>
                </div>
              </div>

{/* Main appointment info */}
<div className="bg-red-50 p-4 rounded-2xl shadow-xl mb-6">
<h1 className="text-lg font-semibold mb-2">On Going Appointments</h1>
  {/* Appointment Card */}
  <div className="bg-white p-4 rounded-2xl shadow border flex justify-between items-center mb-4">
    {/* Customer Info */}
    <div className="flex items-center gap-4">
      <img
        src="/avatars/avatar1.jpg"
        alt="Maurice"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-gray-900">Maurice Galley</p>
        <p className="text-sm text-gray-500">PB-002</p>
      </div>
    </div>
    {/* Artist Info */}
    <div className="text-right">
      <p className="text-base font-semibold text-gray-900">Dr. David Carter</p>
      <p className="text-sm text-gray-500">Laser Hair Removal</p>
    </div>
  </div>

  {/* Estimated Time */}
  <div className="text-sm text-center text-gray-700 border-t pt-3 mb-6">
    Est. Time: <span className="font-medium">12:00 PM - 90 Minute</span>
  </div>

  {/* Details and Notes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
    <div>
      <p className="font-medium text-gray-600 mb-1">Phones</p>
      <p>34820385205</p>

      <p className="mt-3 font-medium text-gray-600 mb-1">Address</p>
      <p>45 Green Valley Road, Apt 12,<br />New York, NY 10001</p>
    </div>

    <div>
      <p className="font-medium text-gray-600 mb-1">Consultation Notes</p>
      <p>
        Maurice is responding well to the treatment, and further sessions may be required
        for complete results.
      </p>
    </div>
  </div>
</div>


              {/* Upcoming Appointments */}
              <div className="bg-green-50 p-4 rounded-2xl shadow-xl mb-6">
                <h1 className="text-lg font-semibold mb-2">Upcoming Appointments</h1>
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      name: "Laura Bennett",
                      treatment: "Acne ・ Dr. Emily",
                      date: "24 Sep 2028",
                      time: "9:00 AM",
                      avatar: "/avatars/avatar2.jpg",
                    },
                    {
                      name: "Nathan Stewart",
                      treatment: "Fillers ・ Dr. Olivia",
                      date: "25 Sep 2028",
                      time: "10:00 AM",
                      avatar: "/avatars/avatar3.jpg",
                    },
                    {
                      name: "Nathan Stewart",
                      treatment: "Fillers ・ Dr. Olivia",
                      date: "25 Sep 2028",
                      time: "10:00 AM",
                      avatar: "/avatars/avatar3.jpg",
                    },
                    {
                      name: "Nathan Stewart",
                      treatment: "Fillers ・ Dr. Olivia",
                      date: "25 Sep 2028",
                      time: "10:00 AM",
                      avatar: "/avatars/avatar3.jpg",
                    },
                    {
                      name: "Nathan Stewart",
                      treatment: "Fillers ・ Dr. Olivia",
                      date: "25 Sep 2028",
                      time: "10:00 AM",
                      avatar: "/avatars/avatar3.jpg",
                    },
                    {
                      name: "Nathan Stewart",
                      treatment: "Fillers ・ Dr. Olivia",
                      date: "25 Sep 2028",
                      time: "10:00 AM",
                      avatar: "/avatars/avatar3.jpg",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-t pt-3">
                      <div className="flex gap-2 items-center">
                        <img
                          src={item.avatar}
                          className="w-8 h-8 rounded-full object-cover"
                          alt={item.name}
                        />
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.treatment}</p>
                        </div>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Button */}
              <div className="mt-5 text-right">
                <button
                  onClick={onClose}
                  className="text-sm px-4 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
