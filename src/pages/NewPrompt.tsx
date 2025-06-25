import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewPrompt = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            Create New Prompt
          </h1>
          <p className="text-muted-foreground mt-2">
            Build structured prompts with placeholders and variables
          </p>
        </div>

        <Card className="prompt-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              New Prompt Editor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-brand-100 flex items-center justify-center">
                <Plus className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Prompt Editor Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4">
                This will include a rich editor for creating prompts with
                variables like{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  {"{{topic}}"}
                </code>{" "}
                and{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  {"{{tone}}"}
                </code>
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Prompt title and description</p>
                <p>• Category selection</p>
                <p>• Tags and metadata</p>
                <p>• Variable placeholders</p>
                <p>• Test area for preview</p>
                <p>• Save, share, and export options</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewPrompt;
