import { useState } from "react";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent()

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-72">
       
        <CreateContentModel
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

       
        <div className="flex justify-end gap-3">
          <Button
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon size="md" />}
            Click={() => setModalOpen(true)}
          />
          <Button
  Click={async () => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
      share: true
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    });

    const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
    alert(shareUrl);
       
  }}
  variant="secondary"
  text="Share Brain"
  startIcon={<ShareIcon size="md" />}
/>

        </div>
      <div className="flex gap-2">
               
        {Array.isArray(contents) && contents.map(({ type, link, title }, idx) => (
  <Card 
    key={idx}
    title={title}
    type={type}
    link={link}
  />
))}
      </div>

      </div>
    </div>
  );
}
