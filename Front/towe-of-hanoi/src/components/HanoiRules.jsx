export function HanoiRules () {
    return (
      <div className="hanoi-tower-rules-and-info">
        <h2>Introduction and Rules</h2>
        <p>The tower of Hanoi is a mathematical puzzle. It consists of three rods and several disks of different
diameters, which can slide onto any rod. The puzzle starts with the disks stacked on one rod in
order of decreasing size, the smallest at the top, thus approximating a canonical shape. The
objective of the puzzle is to move the entire stack to the last rod.
There are three simple rules:</p>
<ul>
<li type="disc">  Only one disk may be moved at a time.</li>

<li type="disc">Each move consists of taking the upper disk from one of the stacks and placing it on
top of another stack or an empty rod.</li>


<li type="disc"> No disk may be placed on top of a disk that is smaller than it</li>

</ul>
      </div>
      
    )
  }
  