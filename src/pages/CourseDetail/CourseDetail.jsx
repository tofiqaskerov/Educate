import { Accordion, AccordionDetails, AccordionSummary, Grid, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch, useSelector } from 'react-redux';
import {getCourseByIdAction} from '../../redux/actions/CourseAction'
import { useParams } from 'react-router-dom';
function CourseDetail() {
    const [expanded, setExpanded] = useState('panel0');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const { courses } = useSelector((state) => state.courses)
    const {id} = useParams()

    const dispatch = useDispatch()

    useState(() => {
        dispatch(getCourseByIdAction(id))
    }, [])

    console.log(courses)
    return (
        <>
            <Grid width="70%" margin="auto" container spacing={4}>
                <Grid item lg={8}>
                    <h1>{courses.name}</h1>
                    <img width="100%" src={courses.photoUrl} alt="" />
                    <p>
                        {courses.description}
                    </p>

                    {/* Accardion start */}

                    <div>
                        {
                            courses.courseContents &&
                            courses.courseContents.map((c, index) => (
                                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>{c.contentName}</Typography>
                                    </AccordionSummary>
                                    {
                                        c.contentLessons &&
                                        c.contentLessons.map((cl, index) => (
                                            <AccordionDetails key={index}>
                                                <Typography display="flex" alignItems="center">
                                                    <PlayCircleIcon /> {cl.lessonName}
                                                </Typography>
                                            </AccordionDetails>
                                        ))
                                    }

                                </Accordion>
                            ))
                        }

                    </div>
         
                </Grid>
                <Grid item lg={4}>
                    <div className='course_feature'>
                        <h1>Course Features</h1>
                        <ul>
                            <li>Raiting: {courses.raiting} 
                            <br />
                            <Rating name="half-rating-read" defaultValue={courses.raiting} precision={0.5} readOnly />
                            </li>
                            <hr />
                            <li>Duration: {courses.duration} hours  </li>
                            <hr />
                            <li>Price: ${courses.price}  </li>
                            <hr />
                        </ul>
                    </div>
                </Grid>
            </Grid>

            <br />
            <br />
            <br />
            <br />
         

        </>
    )
}

export default CourseDetail