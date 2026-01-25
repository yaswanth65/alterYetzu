"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Share2,
  Edit2,
  User,
  Mail,
  Phone,
  Globe,
  X,
  Check,
  Camera,
} from "lucide-react";
import useSession from "@/hooks/useSession";

export default function ProfilePage() {
  const { user } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.name || "Kushagra Bhuwalka",
    email: user?.email || "kushagrabhuwalka@gmail.com",
    phone: "+91 86300 40294",
    connection: "kushagra2005",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Inter']">
      <div className="  border border-gray-100 overflow-hidden">

        {/* ================= Banner ================= */}
        <div className="relative h-48">
          <Image
            src="https://images.unsplash.com/photo-1503264116251-35a269479413"
            alt="Profile Banner"
            fill
            className="object-cover"
            priority
          />
          <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30">
            <Edit2 size={16} />
          </button>
        </div>

        <div className="px-8 pb-8">

          {/* ================= Profile Header ================= */}
          <div className="relative -mt-16 flex flex-col gap-6 mb-10">

            {/* Avatar */}
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 relative">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {isEditing && (
                <button className="absolute bottom-1 right-1 p-2 bg-[#042BFD] text-white rounded-full border-2 border-white hover:bg-[#0325D7]">
                  <Camera size={16} />
                </button>
              )}
            </div>

            {/* Name + Actions */}
            <div className="flex justify-between items-center w-full">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {formData.fullName}
                  </h1>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-[#042BFD] border border-blue-100">
                    Student
                  </span>
                </div>
                <p className="text-gray-500">{formData.email}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm">
                  <Share2 size={16} />
                  Share
                </button>

                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#042BFD] text-white hover:bg-[#0325D7] text-sm"
                  >
                    <Edit2 size={16} />
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-10"></div>

          {/* ================= Form Section ================= */}
<div className="w-full">
  <div className="w-full">


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full Name */}
                <InputField
                  label="Full Name"
                  icon={<User size={18} />}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />

                {/* Email */}
                <InputField
                  label="Email"
                  icon={<Mail size={18} />}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />

                {/* Phone */}
                <InputField
                  label="Phone Number"
                  icon={<Phone size={18} />}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />

                {/* Connection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Connections
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Globe size={18} />
                    </div>
                    <select
                      name="connection"
                      value={formData.connection}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all
                        ${
                          isEditing
                            ? "border-gray-200 focus:border-[#042BFD] focus:ring-2 focus:ring-blue-50 bg-white"
                            : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                        }`}
                    >
                      <option value="kushagra2005">kushagra2005</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= Footer ================= */}
        {isEditing && (
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-[8px] border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-sm"
            >
              <X size={16} />
              Cancel
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-[8px] bg-[#042BFD] text-white hover:bg-[#0325D7] text-sm"
            >
              <Check size={16} />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= Reusable Input ================= */
function InputField({
  label,
  icon,
  ...props
}: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          {...props}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all
            ${
              props.disabled
                ? "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                : "border-gray-200 focus:border-[#042BFD] focus:ring-2 focus:ring-blue-50 bg-white"
            }`}
        />
      </div>
    </div>
  );
}
