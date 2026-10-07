USE campus_navigation;

-- Buildings
INSERT INTO buildings
(name, type, description, location)
VALUES
(
    'Main Academic Block',
    'Academic',
    'Classrooms, lecture halls, departments and student facilities.',
    'Central Campus'
),
(
    'Central Library',
    'Library',
    'Books, digital resources, study areas and research facilities.',
    'North Campus'
),
(
    'Student Center',
    'Student Services',
    'Student support, common areas and campus services.',
    'Central Campus'
),
(
    'Administration Block',
    'Administration',
    'Administrative offices and university management services.',
    'East Campus'
);

-- Departments
INSERT INTO departments
(name, description, building_id)
VALUES
(
    'Computer Science Department',
    'Department of computer science, software and computing studies.',
    1
),
(
    'Physics Department',
    'Department of physics and scientific studies.',
    1
),
(
    'Business Administration Department',
    'Department of business and management studies.',
    1
);

-- Rooms
INSERT INTO rooms
(room_number, room_name, floor, building_id, room_type)
VALUES
(
    '101',
    'Computer Lab 1',
    'Ground Floor',
    1,
    'Computer Lab'
),
(
    '102',
    'Computer Lab 2',
    'Ground Floor',
    1,
    'Computer Lab'
),
(
    '201',
    'Physics Laboratory',
    'First Floor',
    1,
    'Laboratory'
),
(
    '301',
    'Lecture Hall A',
    'Second Floor',
    1,
    'Lecture Hall'
);

-- Services
INSERT INTO services
(name, description, location, building_id)
VALUES
(
    'Student Support Center',
    'General student assistance and support services.',
    'Student Center',
    3
),
(
    'Admissions Office',
    'Admission and enrollment related services.',
    'Administration Block',
    4
),
(
    'IT Help Desk',
    'Technical support for students and staff.',
    'Main Academic Block',
    1
),
(
    'Library Help Desk',
    'Assistance with books, resources and library services.',
    'Central Library',
    2
);

-- Office Hours
INSERT INTO office_hours
(department_id, day_of_week, opening_time, closing_time)
VALUES
(1, 'Monday', '08:00:00', '16:00:00'),
(1, 'Tuesday', '08:00:00', '16:00:00'),
(1, 'Wednesday', '08:00:00', '16:00:00'),
(1, 'Thursday', '08:00:00', '16:00:00'),
(1, 'Friday', '08:00:00', '13:00:00'),

(2, 'Monday', '08:00:00', '16:00:00'),
(2, 'Tuesday', '08:00:00', '16:00:00'),
(2, 'Wednesday', '08:00:00', '16:00:00'),
(2, 'Thursday', '08:00:00', '16:00:00'),
(2, 'Friday', '08:00:00', '13:00:00');