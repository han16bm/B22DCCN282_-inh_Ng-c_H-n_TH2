import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import { useParams } from "react-router-dom";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(models.photoOfUserModel(userId));
  }, [userId]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Photos of User ID: {userId}
      </Typography>

      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 4 }}>
          {/* Ảnh */}
          <CardMedia
            component="img"
            image={require(`../../images/${photo.file_name}`)}
            alt={photo.file_name}
            sx={{ width: 300, height: "auto", mx: "auto", mt: 2 }}
          />

          <CardContent>
            {/* Ngày giờ tạo ảnh */}
            <Typography variant="body2" color="text.secondary">
              {new Date(photo.date_time).toLocaleString()}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Tiêu đề "Comments" */}
            <Typography variant="h6" gutterBottom>
              Comments
            </Typography>

            {/* Phần comments */}
            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((c) => (
                <div key={c._id} style={{ marginBottom: 16 }}>
                  {/* Tên người comment là link */}
                  <MuiLink
                    component={Link}
                    to={`/users/${c.user._id}`}
                    underline="hover"
                    variant="subtitle2"
                  >
                    {c.user.first_name} {c.user.last_name}
                  </MuiLink>

                  {/* Thời gian comment */}
                  <Typography variant="caption" color="text.secondary" display="block">
                    {new Date(c.date_time).toLocaleString()}
                  </Typography>

                  {/* Nội dung comment */}
                  <Typography variant="body2">{c.comment}</Typography>

                  <Divider sx={{ mt: 2 }} />
                </div>
              ))
            ) : (
              <Typography variant="body2">No comments.</Typography>
            )}
          </CardContent>

        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;