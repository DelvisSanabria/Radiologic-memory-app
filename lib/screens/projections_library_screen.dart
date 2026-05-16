import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_theme.dart';

class ProjectionsLibraryScreen extends StatelessWidget {
  const ProjectionsLibraryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Projections Library'),
        actions: [
          IconButton(icon: const Icon(Icons.filter_list), onPressed: () {}),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _LibrarySection(
            title: 'THORAX SERIES',
            items: const [
              _LibraryItem(
                name: 'Chest PA',
                description: 'Standard postero-anterior view',
                cases: 24,
              ),
              _LibraryItem(
                name: 'Chest Lateral',
                description: 'Left lateral view',
                cases: 18,
              ),
              _LibraryItem(
                name: 'Apical Lordotic',
                description: 'Evaluation of lung apices',
                cases: 8,
              ),
              _LibraryItem(
                name: 'Supine Chest',
                description: 'Portable bedside examination',
                cases: 12,
              ),
            ],
          ),
          const SizedBox(height: 24),
          _LibrarySection(
            title: 'UPPER EXTREMITY',
            items: const [
              _LibraryItem(
                name: 'Wrist PA',
                description: 'Postero-anterior wrist view',
                cases: 15,
              ),
              _LibraryItem(
                name: 'Hand Oblique',
                description: 'Oblique hand projection',
                cases: 10,
              ),
              _LibraryItem(
                name: 'Elbow AP',
                description: 'Antero-posterior elbow view',
                cases: 12,
              ),
            ],
          ),
          const SizedBox(height: 24),
          _LibrarySection(
            title: 'SPINE SERIES',
            items: const [
              _LibraryItem(
                name: 'C-Spine AP',
                description: 'Antero-posterior cervical spine',
                cases: 20,
              ),
              _LibraryItem(
                name: 'C-Spine Lateral',
                description: 'Lateral cervical spine view',
                cases: 22,
              ),
              _LibraryItem(
                name: 'T-Spine Lateral',
                description: 'Lateral thoracic spine view',
                cases: 16,
              ),
              _LibraryItem(
                name: 'L-Spine AP',
                description: 'Antero-posterior lumbar spine',
                cases: 18,
              ),
            ],
          ),
          const SizedBox(height: 24),
          _LibrarySection(
            title: 'LOWER EXTREMITY',
            items: const [
              _LibraryItem(
                name: 'Knee AP',
                description: 'Antero-posterior knee view',
                cases: 14,
              ),
              _LibraryItem(
                name: 'Ankle Mortise',
                description: 'Mortise view of ankle joint',
                cases: 11,
              ),
              _LibraryItem(
                name: 'Hip AP',
                description: 'Antero-posterior hip view',
                cases: 16,
              ),
            ],
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 2,
        onTap: (index) {
          switch (index) {
            case 0:
              Navigator.pushNamed(context, '/search');
              break;
            case 1:
              Navigator.pushNamed(context, '/search');
              break;
            case 3:
              break;
          }
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search_outlined),
            label: 'Search',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Learn'),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_outline),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}

class _LibrarySection extends StatelessWidget {
  final String title;
  final List<_LibraryItem> items;

  const _LibrarySection({required this.title, required this.items});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: GoogleFonts.inter(
            fontSize: 12,
            fontWeight: FontWeight.w600,
            color: AppTheme.textSecondary,
            letterSpacing: 1,
          ),
        ),
        const SizedBox(height: 12),
        ...items.map(
          (item) => Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: _LibraryItemCard(item: item),
          ),
        ),
      ],
    );
  }
}

class _LibraryItem {
  final String name;
  final String description;
  final int cases;

  const _LibraryItem({
    required this.name,
    required this.description,
    required this.cases,
  });
}

class _LibraryItemCard extends StatelessWidget {
  final _LibraryItem item;

  _LibraryItemCard({required this.item});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, '/viewer');
      },
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppTheme.surfaceColor,
          borderRadius: BorderRadius.circular(AppTheme.borderRadius),
          border: Border.all(color: AppTheme.dividerColor),
        ),
        child: Row(
          children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                color: AppTheme.primaryColor.withOpacity(0.1),
                borderRadius: BorderRadius.circular(AppTheme.borderRadius),
              ),
              child: Icon(
                Icons.medical_services,
                color: AppTheme.primaryColor,
                size: 24,
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.name,
                    style: GoogleFonts.inter(
                      fontSize: 15,
                      fontWeight: FontWeight.w500,
                      color: AppTheme.textColor,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    item.description,
                    style: GoogleFonts.inter(
                      fontSize: 13,
                      color: AppTheme.textSecondary,
                    ),
                  ),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: AppTheme.primaryColor.withOpacity(0.1),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Text(
                '${item.cases} cases',
                style: GoogleFonts.inter(
                  fontSize: 11,
                  fontWeight: FontWeight.w600,
                  color: AppTheme.primaryColor,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
