import React from 'react';
import Event from './Event';

const Calendar = () => {
  return (
    <div className='Calendar'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='time'>8 AM</td>
            <Event
              event='🕋 Morning athkar & review to-do list'
              color='green'
            />
            <td>
              <Event event='📝 Plan week ahead' color='yellow' />
            </td>
            <td>
              <Event event='📚 Review notes' color='blue' />
            </td>
            <td>
              <Event event='🧘‍♀️ Meditation break' color='lavender' />
            </td>
            <td>
              <Event event='☀️ Morning walk' color='peach' />
            </td>
            <td>
              <Event event='✍️ Journaling' color='coral' />
            </td>
            <td>
              <Event event='📅 Prep for meetings' color='orange' />
            </td>
          </tr>

          <tr>
            <td className='time'>9 AM</td>
            <Event event='🥞 Eat breakfast & plan the day' color='blue' />
            <td>
              <Event event='📖 Read articles' color='pink' />
            </td>
            <td>
              <Event event='🧑‍💻 Practice React' color='purple' />
            </td>
            <td>
              <Event event='📝 To-do list update' color='green' />
            </td>
            <td>
              <Event event='🎧 Listen to podcast' color='teal' />
            </td>
            <td>
              <Event event='📊 Work on project' color='yellow' />
            </td>
            <td>
              <Event event='💬 Call a friend' color='lavender' />
            </td>
          </tr>

          <tr>
            <td className='time'>10 AM</td>
            <Event
              event='💻 Coding or working on a personal project'
              color='pink'
            />
            <td>
              <Event event='💡 Brainstorm ideas' color='orange' />
            </td>
            <td>
              <Event event='📅 Schedule tasks' color='blue' />
            </td>
            <td>
              <Event event='🖥️ Debug code' color='coral' />
            </td>
            <td>
              <Event event='✏️ Write blog post' color='green' />
            </td>
            <td>
              <Event event='📚 Study algorithms' color='yellow' />
            </td>
            <td>
              <Event event='🎨 Creative time' color='peach' />
            </td>
          </tr>

          <tr>
            <td className='time'>11 AM</td>
            <Event
              event='🤝 Internship meeting / pair-programming session'
              color='yellow'
            />
            <td>
              <Event event='🗂️ Organize files' color='teal' />
            </td>
            <td>
              <Event event='🧩 Solve puzzles' color='pink' />
            </td>
            <td>
              <Event event='⚙️ Work on features' color='purple' />
            </td>
            <td>
              <Event event='🔍 Research new tools' color='orange' />
            </td>
            <td>
              <Event event='📈 Analyze data' color='green' />
            </td>
            <td>
              <Event event='📖 Read tech blogs' color='lavender' />
            </td>
          </tr>

          <tr>
            <td className='time'>12 PM</td>
            <Event event='🥗 Lunch & 🧎‍♀️ Pray Dhuhr' color='purple' />
            <td>
              <Event event='🍱 Lunch break' color='coral' />
            </td>
            <td>
              <Event event='🧎‍♀️ Pray Dhuhr' color='green' />
            </td>
            <td>
              <Event event='🥗 Healthy snack' color='yellow' />
            </td>
            <td>
              <Event event='🌿 Rest time' color='peach' />
            </td>
            <td>
              <Event event='📚 Light reading' color='blue' />
            </td>
            <td>
              <Event event='🧎‍♀️ Pray Dhuhr' color='green' />
            </td>
          </tr>

          <tr>
            <td className='time'>1 PM</td>
            <Event event='🧠 Deep focus on coding project' color='orange' />
            <td>
              <Event event='🧑‍🏫 Study session' color='lavender' />
            </td>
            <td>
              <Event event='📝 Write notes' color='coral' />
            </td>
            <td>
              <Event event='🖥️ Debugging' color='blue' />
            </td>
            <td>
              <Event event='📖 Learn new topics' color='yellow' />
            </td>
            <td>
              <Event event='✍️ Work on blog' color='pink' />
            </td>
            <td>
              <Event event='🎯 Set weekly goals' color='teal' />
            </td>
          </tr>

          <tr>
            <td className='time'>2 PM</td>
            <Event
              event='📖 Attend online classes & do Codepath assignments'
              color='coral'
            />
            <td>
              <Event event='🧠 Practice coding' color='green' />
            </td>
            <td>
              <Event event='💻 Project work' color='orange' />
            </td>
            <td>
              <Event event='📊 Data analysis' color='pink' />
            </td>
            <td>
              <Event event='🧩 Puzzle solving' color='purple' />
            </td>
            <td>
              <Event event='📝 Review lessons' color='yellow' />
            </td>
            <td>
              <Event event='🎮 Relax & game' color='peach' />
            </td>
          </tr>

          <tr>
            <td className='time'>3 PM</td>
            <Event event='☕ Tea/coffee: Brain Break' color='lavender' />
            <td>
              <Event event='☀️ Quick walk' color='peach' />
            </td>
            <td>
              <Event event='🎧 Listen to Quran' color='teal' />
            </td>
            <td>
              <Event event='🧘‍♀️ Stretch break' color='green' />
            </td>
            <td>
              <Event event='📝 Plan tomorrow' color='coral' />
            </td>
            <td>
              <Event event='📚 Read book' color='blue' />
            </td>
            <td>
              <Event event='💬 Chat with friends' color='yellow' />
            </td>
          </tr>

          <tr>
            <td className='time'>4 PM</td>
            <Event event='🏃‍♀️ Exercise or take a walk outside' color='peach' />
            <td>
              <Event event='🏃 Yoga session' color='purple' />
            </td>
            <td>
              <Event event='🖌️ Creative time' color='pink' />
            </td>
            <td>
              <Event event='🍵 Tea break' color='lavender' />
            </td>
            <td>
              <Event event='📝 Write journal' color='orange' />
            </td>
            <td>
              <Event event='🎮 Play games' color='teal' />
            </td>
            <td>
              <Event event='📞 Call family' color='green' />
            </td>
          </tr>

          <tr>
            <td className='time'>5 PM</td>
            <Event event='🧎‍♀️ Pray Asr & wrap up work' color='teal' />
            <td>
              <Event event='🧎‍♀️ Pray Asr' color='green' />
            </td>
            <td>
              <Event event='🍽️ Dinner prep' color='coral' />
            </td>
            <td>
              <Event event='📺 Watch a show' color='blue' />
            </td>
            <td>
              <Event event='🌙 Evening walk' color='peach' />
            </td>
            <td>
              <Event event='🛀 Relax & unwind' color='purple' />
            </td>
            <td>
              <Event event='🧎‍♀️ Pray Asr' color='green' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
