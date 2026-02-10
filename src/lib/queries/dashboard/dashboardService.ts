import { authApi } from "@/lib/axios";
import { StudentOverviewResponse } from "./types";

export const dashboardService = {
    getStudentOverview: async () => {
        const res = await authApi.get("/dashboard/studentOverview");
        console.log("Student Overview API Response:", res);
        const data = res.data?.data || {};
         const totalEnrolledCourses=data?.overview?.totalEnrolledCourses
        // Transform recentSessions to match Webinar interface partially
        const mappedWebinars = (data.upcomingCourses || []).map((session: any) => ({
            id: session.id,
            title: session.title,
            educatorName: session.educatorName || "Educator", // Placeholder
            description: session.id || "Live Session - " + session.status,
            scheduledDate: session.startDateTime,
            time: new Date(session.attendedAt).toLocaleTimeString(),
            thumbnail: "/images/placeholder.png"
        }));

        return {
            webinars: mappedWebinars,
            assignments: data.dueAssignments || [],
            dueAssignments: data.dueAssignments || [],
            submittedAssignments: [],
            totalEnrolledCourses:totalEnrolledCourses,
        } as StudentOverviewResponse;
    },
};
