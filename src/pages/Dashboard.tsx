import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  FileText,
  Star,
  Share,
  Users,
  PenTool,
  Code,
  Megaphone,
  BarChart3,
  Grid3X3,
  List,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Prompt {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  lastUsed: string;
  isFavorite: boolean;
  author: string;
  usageCount: number;
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const stats = [
    {
      title: "Total Prompts",
      value: "41",
      icon: "📝",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Categories",
      value: "4",
      icon: "📁",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Shared",
      value: "7",
      icon: "🔗",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Team Prompts",
      value: "12",
      icon: "👥",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const sidebarItems = [
    { title: "My Prompts", icon: FileText, count: 41, isActive: true },
    { title: "Favorites", icon: Star, count: 8 },
    { title: "Shared with Me", icon: Share, count: 5 },
    { title: "Team Workspaces", icon: Users, count: 2 },
  ];

  const categories = [
    { title: "Writing", icon: PenTool, count: 12, color: "text-blue-600" },
    { title: "Coding", icon: Code, count: 8, color: "text-green-600" },
    {
      title: "Marketing",
      icon: Megaphone,
      count: 15,
      color: "text-purple-600",
    },
    { title: "Analysis", icon: BarChart3, count: 6, color: "text-orange-600" },
  ];

  const recentPrompts: Prompt[] = [
    {
      id: 1,
      title: "Blog Post Generator",
      description:
        "Create engaging blog posts about {{topic}} for {{audience}} with {{tone}}...",
      category: "Writing",
      tags: ["Blog"],
      lastUsed: "Used 2 days ago",
      isFavorite: false,
      author: "You",
      usageCount: 12,
    },
    {
      id: 2,
      title: "Code Debugger",
      description:
        "Debug {{language}} code and explain the issue with {{code_snippet}}...",
      category: "Coding",
      tags: ["Debug"],
      lastUsed: "Used 1 week ago",
      isFavorite: true,
      author: "You",
      usageCount: 35,
    },
    {
      id: 3,
      title: "Social Media Caption",
      description:
        "Generate engaging captions for {{platform}} about {{product}} targeting {{audience}}...",
      category: "Marketing",
      tags: ["Social"],
      lastUsed: "Used 3 days ago",
      isFavorite: false,
      author: "You",
      usageCount: 8,
    },
    {
      id: 4,
      title: "Data Analyzer",
      description:
        "Analyze {{data_type}} data and provide insights about {{metrics}}...",
      category: "Analysis",
      tags: [],
      lastUsed: "Used 5 days ago",
      isFavorite: false,
      author: "You",
      usageCount: 27,
    },
    {
      id: 5,
      title: "Email Template",
      description:
        "Create professional email for {{purpose}} to {{recipient}} with {{tone}}...",
      category: "Writing",
      tags: ["Email"],
      lastUsed: "Used 1 day ago",
      isFavorite: true,
      author: "You",
      usageCount: 45,
    },
    {
      id: 6,
      title: "Code Reviewer",
      description:
        "Review {{language}} code for best practices and suggest improvements...",
      category: "Coding",
      tags: ["Review"],
      lastUsed: "Used 4 days ago",
      isFavorite: false,
      author: "You",
      usageCount: 18,
    },
  ];

  const filteredPrompts = recentPrompts.filter(
    (prompt) =>
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      Writing: "text-blue-600 bg-blue-50",
      Coding: "text-green-600 bg-green-50",
      Marketing: "text-purple-600 bg-purple-50",
      Analysis: "text-orange-600 bg-orange-50",
    };
    return (
      colors[category as keyof typeof colors] || "text-gray-600 bg-gray-50"
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PA</span>
            </div>
            <span className="font-semibold text-gray-900">Prompt Library</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  item.isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50",
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{item.title}</span>
                <span className="text-xs text-gray-500">{item.count}</span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              CATEGORIES
            </h3>
            <div className="space-y-1">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <category.icon className={cn("h-4 w-4", category.color)} />
                  <span className="flex-1 text-left">{category.title}</span>
                  <span className="text-xs text-gray-500">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/new-prompt">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Prompt
                </Button>
              </Link>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/user.jpg" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center text-lg",
                      stat.bgColor,
                    )}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className={cn("text-2xl font-bold", stat.textColor)}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Prompts Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Prompts
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      viewMode === "grid"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-400 hover:text-gray-600",
                    )}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      viewMode === "list"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-400 hover:text-gray-600",
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div
                className={cn(
                  viewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-3",
                )}
              >
                {filteredPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge
                          className={cn(
                            "text-xs px-2 py-1",
                            getCategoryColor(prompt.category),
                          )}
                        >
                          {prompt.category}
                        </Badge>
                        {prompt.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {prompt.isFavorite && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>

                    <h3 className="font-medium text-gray-900 mb-2">
                      {prompt.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {prompt.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{prompt.lastUsed}</span>
                      </div>
                      <span>Used {prompt.usageCount} times</span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPrompts.length === 0 && (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No prompts found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search query or create a new prompt.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
