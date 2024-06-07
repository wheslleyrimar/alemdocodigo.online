import { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Card, CardContent, CardActions, Typography, Button, Container, Grid } from '@mui/material';
import './CourseList.css';

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const auth = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://18.227.134.20:80:8080/api/courses', {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      }
    };

    fetchCourses();
  }, [auth.token]);

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card className="course-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseList;
