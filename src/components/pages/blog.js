import "./blog.css";
import BlogContent from "../BlogContent";

const Blog = () => {
  return (
    <div className="container-blog">
      <div className="blog-title">My Blogs</div>
      <BlogContent
        className="blog-fitness"
        title="Fitness"
        content={[
          `There are many benefits in taking care of your body through fitness. You can improve your 
    overall health, have an aesthetic physique, boost your energy and mood. There are many ways to stay
    active but today, I will be covering the 3 big workouts. The big 3 require a barbell and weights or dumbbells
    that are heavy enough for you to perform 8-12 reps with much effort in the last reps. These reps make a set and 
    you should do 3 sets per workout. They are compound exercises that targets multiple muscles at the same time 
    and together targets all the main muscle groups.`,
          ` 
    The first one to be mentioned is the bench press. It focuses 
    on the pecs, front delts, and triceps. A flat bench is required for this exercise and narrow enough where your 
    arms won't be hindered from being lowered. Lay flat on your back with your legs on each side with feet touching 
    the floor. Chest should be pushed out with your shoulder blades tucked in to avoid injuries. The starting position
    of your arms are stretched straight towards the ceiling. In a steady pace lower the weight by bending your 
    elbow towards the ground. The elbow should be rougly 45 degrees away from the side of your body as you lower them.
    Lower the weights until it makes contact with your chest roughly around below the nipples, then push as hard as you
    can back towards the ceiling. This whole process is one repetition and should repeat it 8-12 times 3 sets. With the right 
    weights, last few reps should be harder to perform. `,
          `The next workout is the deadlift. It targets glutes, hamstrings, 
    core, back, and traps. It is a popular exercise among the gym culture with its technique hard to master and prone 
    to giving injuries if not done right. You can use dumbbells, barbell with weights, or kettlebells.
    Simply stand up straight with your legs apart shoulder width and have the weights by your feet. Lower your 
    upper body and bend your knees slightly to reach for the weights. Stand upright while holding the weight then 
    drop the weight by lowering the upper body and knees again to a rest position. Repeat the process 8-12 times 3 sets. `,
          `The
    last workout I'll be introducing will be squats. It targets glutes, quads, and strenghtens the core. It is a popular
    workout especially for the ladies. You can do this exercise with no extra weights, or with dumbbells, kettlebells, or
    barbells with weights. Stand with yours legs in hip to shoulder widths, feet slightly positioned outerwards from 
    view above, core braced, and chest up. Squat your body by bending
    your knees, driving your hip back, and lowering your upper body to balance if need be. 
    Lower the body until your legs are 90
    degrees (or you can squat all the way down) and stand upright again. Repeat the process 8-12 times 3 sets.`,
          ` Keeping your body fit and healthy is important 
    for all ages. It requires discipline, commitment and consistency. With just the big 3 workouts, they focus on all the
    main muscle groups which makes it an efficient and easy way to keep your body in shape.`,
        ]}
      />
    </div>
  );
};

export default Blog;
