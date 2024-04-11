import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-xl font-bold">Event Manager</div>
        <nav>
          <Button variant="link" className="mr-2">
            Events
          </Button>
          <Button variant="link" className="mr-2">
            Venues
          </Button>
          <Button variant="link">Bookings</Button>
        </nav>
      </header>

      <main className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="venues">Venues</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manage your events here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="venues">
            <Card>
              <CardHeader>
                <CardTitle>Venues</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manage your venues here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manage your bookings here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="p-4 text-center border-t">
        <Separator className="mb-4" />
        <div>&copy; 2023 Event Manager. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
