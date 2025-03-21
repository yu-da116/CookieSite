import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Sample lesson data for the calendar
const lessons = [
  {
    id: 1,
    title: "初めての方向けレッスン",
    date: "2023-12-05",
    time: "10:00",
    available: true
  },
  {
    id: 2,
    title: "月替わりレッスン",
    date: "2023-12-12",
    time: "13:00",
    available: true
  },
  {
    id: 3,
    title: "誕生日レッスン",
    date: "2023-12-15",
    time: "15:00",
    available: false
  },
  {
    id: 4,
    title: "初めての方向けレッスン",
    date: "2023-12-20",
    time: "10:00",
    available: true
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get lessons
  app.get("/api/lessons", (req, res) => {
    res.json(lessons);
  });

  // API route to get lessons by date range
  app.get("/api/lessons/range", (req, res) => {
    const { start, end } = req.query;
    
    if (!start || !end) {
      return res.status(400).json({ message: "Please provide start and end dates" });
    }
    
    // In a real app, we would filter lessons by date range
    // For now, return all lessons
    res.json(lessons);
  });

  // API route to "reserve" a lesson
  app.post("/api/lessons/reserve", (req, res) => {
    const { lessonId, name, email, phone } = req.body;
    
    if (!lessonId || !name || !email || !phone) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
    
    // Find the lesson
    const lesson = lessons.find(l => l.id === parseInt(lessonId));
    
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }
    
    if (!lesson.available) {
      return res.status(400).json({ message: "This lesson is fully booked" });
    }
    
    // In a real app, we would add a reservation to the database
    // For now, just mark the lesson as unavailable
    lesson.available = false;
    
    res.json({ message: "Reservation successful", lesson });
  });

  const httpServer = createServer(app);

  return httpServer;
}
