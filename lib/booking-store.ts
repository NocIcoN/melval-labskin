"use client";

/**
 * Zustand store untuk menyimpan data booking sementara
 * selama alur payment demo (Booking → Review → Payment → Success).
 * Data hilang setelah refresh — sesuai PRD (demo only, no database).
 */

import { create } from "zustand";

export interface BookingData {
  // Customer
  fullName: string;
  phone: string;
  email: string;
  notes: string;

  // Treatment
  treatmentName: string;
  treatmentPrice: number;
  packageName: string;

  // Clinic
  branch: string;
  branchName: string;
  doctorName: string;

  // Schedule
  date: string;
  time: string;

  // Generated
  bookingNumber: string;
  paymentMethod: string;
}

interface BookingStore {
  booking: Partial<BookingData>;
  setBooking: (data: Partial<BookingData>) => void;
  setPaymentMethod: (method: string) => void;
  reset: () => void;
}

function generateBookingNumber(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(Math.random() * 999).toString().padStart(3, "0");
  return `MLB-${dateStr}-${rand}`;
}

export const useBookingStore = create<BookingStore>((set) => ({
  booking: {},
  setBooking: (data) =>
    set((state) => ({
      booking: {
        ...state.booking,
        ...data,
        bookingNumber: state.booking.bookingNumber ?? generateBookingNumber(),
      },
    })),
  setPaymentMethod: (method) =>
    set((state) => ({
      booking: { ...state.booking, paymentMethod: method },
    })),
  reset: () => set({ booking: {} }),
}));
