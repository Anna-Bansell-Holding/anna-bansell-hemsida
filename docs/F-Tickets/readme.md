# Ticket System Documentation

## Overview
This folder contains all project tickets organized in a structured manner. Each ticket represents a specific task, feature, bug fix, or improvement for the Anna Bansell website project.

## Ticket Structure

### Folder Naming Convention
- Tickets are numbered sequentially starting from `001`
- Each ticket gets its own folder
- Format: `001-Ticket-Name`, `002-Ticket-Name`, etc.

### Example Structure
```
F-Tickets/
├── 001-Add-Contact-Form/
├── 002-Fix-Navigation-Mobile/
├── 003-Update-Hero-Section/
└── readme.md
```

## Creating a New Ticket

### Step 1: Create Ticket Folder
1. Create a new folder with the next available number
2. Use kebab-case for the folder name
3. Make the name descriptive and concise

### Step 2: Required Files
Each ticket folder must contain:

#### `[ticket-number]-ticket.md` (Required)
```markdown
# Ticket: [Ticket Number] - [Ticket Title]

## Status
- [ ] Open
- [ ] In Progress
- [ ] Review
- [ ] Completed
- [ ] Closed

## Priority
- [ ] Low
- [ ] Medium
- [ ] High
- [ ] Critical

## Type
- [ ] Feature
- [ ] Bug Fix
- [ ] Improvement
- [ ] Documentation
- [ ] Technical Debt

## Description
[Detailed description of what needs to be done]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Requirements
[Any technical specifications, dependencies, or constraints]

## Estimated Effort
[Time estimate: e.g., 2-4 hours, 1 day, etc.]

## Assigned To
[Team member responsible]

## Created
[Date created]

## Due Date
[Target completion date]

## Notes
[Additional context, links, or information]
```

#### `implementation.md` (Optional)
- Technical implementation details
- Code snippets
- Architecture decisions
- Testing approach

#### `assets/` (Optional)
- Screenshots
- Mockups
- Reference materials
- Test files

## Ticket Workflow

### 1. **Open**
- Ticket is created and documented
- Ready for assignment and prioritization

### 2. **In Progress**
- Work has begun on the ticket
- Update progress in ticket.md
- Add implementation notes as needed

### 3. **Review**
- Work is complete
- Ready for code review or testing
- Update status and add review notes

### 4. **Completed**
- Ticket has been successfully delivered
- All acceptance criteria met
- Add completion notes and lessons learned

### 5. **Closed**
- Ticket is archived
- No further action needed

## Best Practices

### Writing Good Ticket Descriptions
- Be specific and actionable
- Include context and business value
- Reference related tickets or issues
- Use clear, non-technical language when possible

### Updating Tickets
- Keep status current
- Add progress notes regularly
- Document any blockers or changes
- Update estimates if they change significantly

### Ticket Organization
- Use consistent naming conventions
- Keep tickets focused on single concerns
- Break large tickets into smaller, manageable pieces
- Link related tickets when appropriate

## Template Files

### Quick Start Template
Use the following structure for new tickets:

```
001-[Ticket-Name]/
├── 001-ticket.md
├── implementation.md (if needed)
└── assets/ (if needed)
```

### Copy Template
1. Copy the example ticket structure above
2. Rename the folder to the next available number
3. Update the [ticket-number]-ticket.md content
4. Add to version control

## Maintenance

### Regular Reviews
- Review open tickets weekly
- Update status of in-progress tickets
- Archive completed tickets monthly
- Validate ticket numbering sequence

### Cleanup
- Remove duplicate tickets
- Consolidate related tickets when appropriate
- Archive old completed tickets
- Maintain folder structure integrity

---

**Last Updated**: [Current Date]
**Maintained By**: [Team/Person responsible for ticket system]
