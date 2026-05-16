import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_theme.dart';

class EditTechDetailsScreen extends StatefulWidget {
  const EditTechDetailsScreen({super.key});

  @override
  State<EditTechDetailsScreen> createState() => _EditTechDetailsScreenState();
}

class _EditTechDetailsScreenState extends State<EditTechDetailsScreen> {
  final _projectionNameController = TextEditingController(text: 'PA Chest');
  final _instructionsController = TextEditingController(
    text:
        '1. Patient stands facing the bucky.\n2. Chin extended and centered to top of IR.\n3. Hands on hips, palms facing out.\n4. Abdomen rotated forward toward the IR.',
  );
  final _tipsController = TextEditingController(
    text:
        'Ensure the patient takes a deep breath and holds it to expand the lungs fully.',
  );
  final _radiologicalSignsController = TextEditingController();
  final _anatomyPresentController = TextEditingController();

  @override
  void dispose() {
    _projectionNameController.dispose();
    _instructionsController.dispose();
    _tipsController.dispose();
    _radiologicalSignsController.dispose();
    _anatomyPresentController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Cancel'),
        ),
        title: const Text('Edit Tech Details'),
        actions: [
          TextButton(onPressed: _saveDetails, child: const Text('Save')),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 14,
                color: AppTheme.textSecondary,
                height: 1.5,
              ),
            ),
            const SizedBox(height: 24),
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: AppTheme.textSecondary,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _projectionNameController,
              decoration: const InputDecoration(
                hintText: 'Enter projection name',
              ),
            ),
            const SizedBox(height: 20),
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: AppTheme.textSecondary,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _instructionsController,
              maxLines: 6,
              decoration: const InputDecoration(
                hintText: 'Enter step-by-step instructions...',
              ),
            ),
            const SizedBox(height: 20),
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: AppTheme.textSecondary,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _tipsController,
              maxLines: 3,
              decoration: const InputDecoration(
                hintText: 'Enter tips for success...',
              ),
            ),
            const SizedBox(height: 20),
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: AppTheme.textSecondary,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _radiologicalSignsController,
              maxLines: 4,
              decoration: const InputDecoration(
                hintText: 'Key diagnostic markers...',
              ),
            ),
            const SizedBox(height: 20),
            Text(\n                    '\',\n                    style: GoogleFonts.inter(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: AppTheme.textSecondary,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _anatomyPresentController,
              maxLines: 4,
              decoration: const InputDecoration(
                hintText: 'List visible anatomy...',
              ),
            ),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: _saveDetails,
                child: const Text('Save Details'),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _saveDetails() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Details saved successfully'),
        backgroundColor: AppTheme.successColor,
        duration: Duration(seconds: 2),
      ),
    );
    Navigator.pop(context);
  }
}
