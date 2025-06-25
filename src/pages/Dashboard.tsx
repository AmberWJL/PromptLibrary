import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Plus,
  Search,
  Star,
  Users,
  FolderOpen,
  Code,
  PenTool,
  Megaphone,
  Settings,
  User,
  Sparkles,
  BookOpen,
  Share,
  ChevronRight,
  Clock,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    {
      title: "My Prompts",
      icon: FileText,
      badge: "12",
      isActive: true,
    },
    {
      title: "Categories",
      icon: FolderOpen,
      children: [
        { title: "Writing", icon: PenTool, count: 5 },
        { title: "Code", icon: Code, count: 3 },
        { title: "Marketing", icon: Megaphone, count: 4 },
      ],
    },
    {
      title: "Team Workspaces",
      icon: Users,
      badge: "2",
      href: "/team-workspace",
    },
    {
      title: "Favorites",
      icon: Star,
      badge: "8",
    },
    {
      title: "Shared with Me",
      icon: Share,
      badge: "5",
    },
  ];

  const recentPrompts = [
    {
      id: 1,
      title: "Blog Post Writer",
      description: "Create engaging blog posts with {{topic}} and {{tone}}",
      category: "Writing",
      tags: ["content", "blog", "seo"],
      lastUsed: "2 hours ago",
      isFavorite: true,
      author: "You",
    },
    {
      id: 2,
      title: "Code Reviewer",
      description: "Review {{language}} code for best practices and bugs",
      category: "Code",
      tags: ["review", "debugging", "best-practices"],
      lastUsed: "1 day ago",
      isFavorite: false,
      author: "You",
    },
    {
      id: 3,
      title: "Email Campaign Creator",
      description:
        "Generate email campaigns for {{product}} targeting {{audience}}",
      category: "Marketing",
      tags: ["email", "campaign", "conversion"],
      lastUsed: "3 days ago",
      isFavorite: true,
      author: "Sarah Chen",
    },
    {
      id: 4,
      title: "Meeting Summarizer",
      description: "Summarize meeting notes and extract action items",
      category: "Writing",
      tags: ["meetings", "summary", "productivity"],
      lastUsed: "1 week ago",
      isFavorite: false,
      author: "Team Workspace",
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

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="border-r border-sidebar-border">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sidebar-foreground">
                  Prompt Library
                </span>
                <span className="text-xs text-sidebar-foreground/60">
                  AI Prompts Hub
                </span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-2">
            <SidebarMenu>
              {sidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild={!!item.href}
                    isActive={item.isActive}
                    className="group relative"
                  >
                    {item.href ? (
                      <Link to={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1">{item.title}</span>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className="ml-auto h-5 w-5 rounded-full bg-brand-100 text-brand-700 text-xs font-medium"
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {item.children && (
                          <ChevronRight className="h-3 w-3 text-sidebar-foreground/60" />
                        )}
                      </Link>
                    ) : (
                      <>
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1">{item.title}</span>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className="ml-auto h-5 w-5 rounded-full bg-brand-100 text-brand-700 text-xs font-medium"
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {item.children && (
                          <ChevronRight className="h-3 w-3 text-sidebar-foreground/60" />
                        )}
                      </>
                    )}
                  </SidebarMenuButton>
                  {item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <SidebarMenuButton
                          key={childIndex}
                          size="sm"
                          className="text-sidebar-foreground/80"
                        >
                          <child.icon className="h-3 w-3" />
                          <span className="flex-1">{child.title}</span>
                          <span className="ml-auto text-xs text-sidebar-foreground/50">
                            {child.count}
                          </span>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <main className="flex-1 flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
              <SidebarTrigger />
              <div className="flex flex-1 items-center gap-4">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
                  />
                </div>
                <Link to="/new-prompt">
                  <Button className="gradient-bg text-white shadow-lg hover:shadow-xl transition-all duration-200">
                    <Plus className="h-4 w-4 mr-2" />
                    New Prompt
                  </Button>
                </Link>
              </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Welcome back! 👋
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Discover, create, and share high-quality AI prompts to
                    supercharge your workflow.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="prompt-card p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-brand-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Prompts
                        </p>
                        <p className="text-2xl font-bold text-foreground">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="prompt-card p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                        <Star className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Favorites
                        </p>
                        <p className="text-2xl font-bold text-foreground">8</p>
                      </div>
                    </div>
                  </div>
                  <div className="prompt-card p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Team Prompts
                        </p>
                        <p className="text-2xl font-bold text-foreground">5</p>
                      </div>
                    </div>
                  </div>
                  <div className="prompt-card p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Share className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Shared</p>
                        <p className="text-2xl font-bold text-foreground">3</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Prompts */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      Recent Prompts
                    </h2>
                    <Button variant="ghost" className="text-brand-600">
                      View all
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPrompts.map((prompt) => (
                      <div key={prompt.id} className="prompt-card p-6 group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                                {prompt.title}
                              </h3>
                              {prompt.isFavorite && (
                                <Heart className="h-4 w-4 text-red-500 fill-current" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                              {prompt.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {prompt.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-muted text-muted-foreground"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{prompt.lastUsed}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>by {prompt.author}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-brand-500 hover:bg-brand-600"
                          >
                            <BookOpen className="h-3 w-3 mr-1" />
                            Open
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-brand-200"
                          >
                            <Share className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredPrompts.length === 0 && (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No prompts found
                      </h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search query or create a new prompt.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
