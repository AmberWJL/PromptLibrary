import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TeamWorkspace = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Team Workspace</h1>
          <p className="text-muted-foreground mt-2">
            Collaborate with your team on shared prompts
          </p>
        </div>

        <Card className="prompt-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Collaboration Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Team Features Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4">
                This workspace will enable seamless team collaboration on AI
                prompts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">👥 Members</h4>
                  <p>• Invite team members</p>
                  <p>• Role-based permissions</p>
                  <p>• Activity tracking</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">
                    📚 Team Prompts
                  </h4>
                  <p>• Shared prompt library</p>
                  <p>• Version control</p>
                  <p>• Collaborative editing</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">💬 Comments</h4>
                  <p>• Real-time discussions</p>
                  <p>• Feedback and reviews</p>
                  <p>• @mentions and notifications</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamWorkspace;
